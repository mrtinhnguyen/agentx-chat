import { SETTINGS_MESSAGES } from '@/constants/settings'
import { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { auth, signIn } from '@/lib/auth'
import db from '@/lib/db'
import { revalidatePath } from 'next/cache'
import { DriveSyncAuto } from '@/components/settings/DriveSyncAuto'

export async function Integrations() {
  const session = await auth()
  const userId = session?.user?.id
  const account = userId
    ? await db.account.findFirst({ where: { userId, provider: 'google-drive' } })
    : null
  const isConnected = !!account

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-semibold">{SETTINGS_MESSAGES.INTEGRATIONS_TITLE}</h2>
          <p className="text-muted-foreground">{SETTINGS_MESSAGES.INTEGRATIONS_DESCRIPTION}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Image src={'/logos/Google_Drive.svg'} width={18} height={18} alt='Google Drive'/>
              Google Drive
            </CardTitle>
            <CardDescription className='w-52'>
              Kết nối Google Drive để duyệt và nhập tệp.
            </CardDescription>
            <CardAction>
              {isConnected ? (
                <div className="flex gap-2 items-center">
                  <DriveSyncAuto isConnected={isConnected} />
                  <form
                    action={async () => {
                      'use server'
                      const sess = await auth()
                      const uid = sess?.user?.id
                      if (!uid) return
                      await db.account.deleteMany({ where: { userId: uid, provider: 'google-drive' } })
                  // Also flip the settings integrations flag to disabled
                  try {
                    const dbUser = await db.user.findUnique({ where: { id: uid }, select: { settings: true } })
                    const settingsValue: unknown = dbUser?.settings ?? {}
                    const settingsObj = (settingsValue && typeof settingsValue === 'object' && !Array.isArray(settingsValue))
                      ? (settingsValue as Record<string, unknown>)
                      : {}
                    const integrationsValue: unknown = (settingsObj as any).integrations
                    const integrationsObj = (integrationsValue && typeof integrationsValue === 'object' && !Array.isArray(integrationsValue))
                      ? (integrationsValue as Record<string, unknown>)
                      : {}
                    const providerValue: unknown = (integrationsObj as any)['google-drive']
                    const providerObj = (providerValue && typeof providerValue === 'object' && !Array.isArray(providerValue))
                      ? (providerValue as Record<string, unknown>)
                      : {}
                    const updatedSettings = {
                      ...settingsObj,
                      integrations: {
                        ...integrationsObj,
                        ['google-drive']: {
                          ...providerObj,
                          enabled: false,
                        },
                      },
                    }
                    await db.user.update({ where: { id: uid }, data: { settings: updatedSettings as any } })
                  } catch {}
                      revalidatePath('/settings/integrations')
                    }}
                  >
                    <Button variant="destructive">Ngắt kết nối</Button>
                  </form>
                </div>
              ) : (
                <form
                  action={async () => {
                    'use server'
                    await signIn('google-drive')
                  }}
                >
                  <Button variant="outline">Kết nối</Button>
                </form>
              )}
            </CardAction>
          </CardHeader>
        </Card>
      </div>
    </div>
  )
}


