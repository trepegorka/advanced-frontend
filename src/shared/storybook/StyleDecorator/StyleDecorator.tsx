import { type Theme } from 'app/providers/ThemeProvider'
import 'app/styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNames'

// eslint-disable-next-line react/display-name
export const StyleDecorator = (theme: Theme) => (Story: React.FC) => (
    <div className={classNames(`app ${theme}`, {}, [])}>
        <Story />
    </div>
)

// eslint-disable-next-line react/display-name
export const StyleDecoratorInverted = (theme: Theme) => (Story: React.FC) => (
    <div style={{ backgroundColor: 'var(--inverted-bg-color)' }} className={classNames(`app ${theme}`, {}, [])}>
        <Story />
    </div>
)
