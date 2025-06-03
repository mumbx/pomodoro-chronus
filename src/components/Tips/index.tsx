import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';

export function Tips() {
  const { state }: { state: { activeTask?: { type: 'workTime' | 'shortBreakTime' | 'longBreakTime' } | null; config: { workTime: number; shortBreakTime: number }; currentCycle: any } } = useTaskContext();
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCyleType = getNextCycleType(nextCycle);

  const tipsForWhenActiveTask = {
    workTime: <span>Foque por {state.config.workTime}min</span>,
    shortBreakTime: <span>Descanse por {state.config.shortBreakTime}min</span>,
    longBreakTime: <span>Descanso longo</span>,
  };

  const tipsForNoActiveTask = {
    workTime: (
      <span>
        Próximo ciclo é de <b>{state.config.workTime}min</b>
      </span>
    ),
    shortBreakTime: (
      <span>Próximo descaso é de {state.config.shortBreakTime}min</span>
    ),
    longBreakTime: <span>Próximo descanso será longo</span>,
  };

  return (
    <>
      {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type as 'workTime' | 'shortBreakTime' | 'longBreakTime']}
      
      {!state.activeTask && tipsForNoActiveTask[nextCyleType]}
    </>
  );
}