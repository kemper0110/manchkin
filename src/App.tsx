import tw from "twin.macro";
import {Icon} from '@iconify/react';

function App() {

    return (
        <div className={'bg-white grid grid-cols-[1fr_3fr_1fr] grid-rows-3 h-screen'}>
            <div></div>
            <div></div>
            <div></div>
            <Treasure/>
            <GameField/>
            <Door/>
            <Equipment/>
        </div>
    )
}

const Equipment = () => (
    <div>

    </div>
)
const GameField = () => (
    <div className={'text-5xl place-self-start justify-self-center'}>
        Game field
    </div>
)

const ActionIconWrapper = tw.button`border-4 w-min h-min hover:bg-slate-100 hover:shadow-2xl transition-all`
const ActionIcon = tw(Icon)`w-[230px] h-[350px]`
const Door = () => (
    <ActionIconWrapper className={`border-blue-600 justify-self-end`}>
        <ActionIcon icon="system-uicons:door-alt" className={'text-blue-600'}/>
    </ActionIconWrapper>
)

const Treasure = () => (
    <ActionIconWrapper className={`border-red-600 justify-self-start`}>
        <ActionIcon icon="game-icons:open-treasure-chest" className={'text-red-600'}/>
    </ActionIconWrapper>
)

const MyCards = () => (
    <div>

    </div>
)
export default App
