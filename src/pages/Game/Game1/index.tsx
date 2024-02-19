import { MINIMUM_CLICK_CYCLE, STAGE_INFOS, TOTAL_STAGE, UNIT_FLIGHT_DISTANCE, UNIT_FLIGHT_TIME } from '@/constants'
import { debounce, throttle } from '@/utils'
import { useRef, useState } from 'react'
import type { GameStateProp } from '../Game.types'
import * as S from './Game1.styles'
import { FlamingRocket, GameEndOverlay, PowerButton, Stage } from './components'

const Game1Page = () => {
  const [gameState, setGameState] = useState<GameStateProp>('before')

  const slidingRef = useRef<HTMLDivElement>(null)
  const currentStageRef = useRef<number>(0)

  const onChangeState = debounce(() => {
    if (gameState !== 'after') {
      setGameState('after')
    }
  }, MINIMUM_CLICK_CYCLE)

  const UptoRocket = throttle(() => {
    if (slidingRef.current === null || gameState !== 'ing') return
    if (currentStageRef.current >= TOTAL_STAGE - 2 * UNIT_FLIGHT_DISTANCE) setGameState('after')
    slidingRef.current.style.transform = `translateY(${(currentStageRef.current * 100) / TOTAL_STAGE}%)`
    currentStageRef.current += UNIT_FLIGHT_DISTANCE
  }, UNIT_FLIGHT_TIME)

  const onClickTestButton = () => {
    if (gameState === 'before') {
      setGameState('ing')
      return
    }
    onChangeState()
    UptoRocket()
  }

  return (
    <S.GameWrapper>
      <S.GameWindow>
        {gameState === 'after' && (
          <GameEndOverlay
            score={currentStageRef.current}
            planetThemeColor={STAGE_INFOS[Math.floor(currentStageRef.current)].planetThemeColor}
            planetImageSrc={STAGE_INFOS[Math.floor(currentStageRef.current)].planetImageSrc}
            stageName={STAGE_INFOS[Math.floor(currentStageRef.current)].stageName}
            distanceFromEarth={STAGE_INFOS[Math.floor(currentStageRef.current)].distanceFromEarth}
          />
        )}

        <S.StageWrapper ref={slidingRef}>
          {STAGE_INFOS.map((stageInfo, index) => {
            return <Stage key={index} {...stageInfo} />
          })}
        </S.StageWrapper>
        <FlamingRocket isFlameStarted={gameState !== 'before'} />
      </S.GameWindow>
      <PowerButton onClick={onClickTestButton} />
    </S.GameWrapper>
  )
}

export default Game1Page
