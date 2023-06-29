import { Cycle } from './redurces'

export enum ActionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERREUPT_CURRENT_CYCLE = 'INTERREUPT_CURRENT_CYCLE',
  MARK_CURRENT_AS_FINISHED = 'MARK_CURRENT_AS_FINISHED',
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function interruptCurrentCycleAction() {
  return {
    type: ActionTypes.INTERREUPT_CURRENT_CYCLE,
  }
}

export function markCurrentCycleAsFinishedAction() {
  return {
    type: ActionTypes.MARK_CURRENT_AS_FINISHED,
  }
}
