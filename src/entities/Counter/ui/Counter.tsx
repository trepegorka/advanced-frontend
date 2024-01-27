import { Button } from 'widgets/Button'
import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '../model/slice/counterSlice'
import { getCounterValue } from 'entities/Counter/model/selectors/getCounterValue/getCounterValue'

export const Counter = () => {
    const dispatch = useDispatch()
    const counterValue = useSelector(getCounterValue)
    const increment = () => {
        dispatch(counterActions.increment())
    }
    const decrement = () => {
        dispatch(counterActions.decrement())
    }
    return (
        <div>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <h1 data-testid={'h1id'}>{counterValue}</h1>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Button data-testid={'increment-btn'} onClick={increment}>
                increment
            </Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Button data-testid={'decrement-btn'} onClick={decrement}>
                decrement
            </Button>
        </div>
    )
}
