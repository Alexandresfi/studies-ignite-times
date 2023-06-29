import { ActionTypes } from './actions'

export interface Cycle {
  id: string
  task: string
  duration: number
  startDate: Date
  interruptedDate?: Date
  finishDate?: Date
}

interface CycleState {
  cycles: Cycle[]
  activeCycleId: string | null
}

export function cyclesRefucer(state: CycleState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_CYCLE: {
      return {
        ...state,
        cycles: [...state.cycles, action.payload.newCycle],
        activeCycleId: action.payload.newCycle.id,
      }
    }
    case ActionTypes.INTERREUPT_CURRENT_CYCLE: {
      return {
        ...state,
        cycles: state.cycles.map((cycle) => {
          if (cycle.id === state.activeCycleId) {
            return { ...cycle, interruptedDate: new Date() }
          } else {
            return cycle
          }
        }),
        activeCycleId: null,
      }
    }
    case ActionTypes.MARK_CURRENT_AS_FINISHED: {
      return {
        ...state,
        cycles: state.cycles.map((cycle) => {
          if (cycle.id === state.activeCycleId) {
            return { ...cycle, finishDate: new Date() }
          } else {
            return cycle
          }
        }),
        activeCycleId: null,
      }
    }
    default:
      return state
  }
}
