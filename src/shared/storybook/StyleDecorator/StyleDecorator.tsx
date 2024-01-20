import { type Theme } from 'app/providers/ThemeProvider'
import 'app/styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNames'

// eslint-disable-next-line react/display-name
export const StyleDecorator = (theme: Theme) => (StoryComponent: React.FC) => (
    <div className={classNames(`app ${theme}`, {}, [])}>
        <StoryComponent />
    </div>
)
