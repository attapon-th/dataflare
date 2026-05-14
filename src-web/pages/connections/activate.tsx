import { memo } from 'react'
import { useCheckUpdate } from '../../hooks/use-update'
import { useTranslation } from '../../i18n'
import { SettingsTab, showSettingsWindow } from '../../tauri'
import { IconButton } from '../../ui'

export const ActivateButton = memo(() => {
    const { t } = useTranslation()
    const availableUpdate = useCheckUpdate()

    if (!availableUpdate) {
        return null
    }

    return (
        <div className='flex h-8 shrink-0 items-center border-t border-separator px-2'>
            {availableUpdate && (
                <IconButton
                    className='ml-auto flex h-5 items-center gap-1 whitespace-nowrap text-[10px]'
                    onClick={() => showSettingsWindow(SettingsTab.General)}
                >
                    {/* NOTE: When modifying here, also update the SettingsEnter component */}
                    <div aria-hidden='true' className='grid'>
                        <div className='col-start-1 row-start-1 size-1 animate-pulse rounded-full bg-yellow-500' />
                        <div className='col-start-1 row-start-1 size-1 animate-ping rounded-full bg-yellow-600' />
                    </div>
                    <span className='text-yellow-500'>{t('installUpdate')}</span>
                </IconButton>
            )}
        </div>
    )
})
