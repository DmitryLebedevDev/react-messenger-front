import { combine, Effect, restore, Store } from "effector"

type EffectStatus<State, Fail = Error> = Store<{
  pending: boolean;
  error: Fail | null;
  data: State | null
}>

export function createEffectStatus<Params, Done, Fail>
(effect: Effect<Params, Done, Fail>): EffectStatus<Done, Fail>
export function createEffectStatus<Params, Done, Fail, State>
(effect: Effect<Params, Done, Fail>, $outStore: Store<State>): EffectStatus<State, Fail>
export function createEffectStatus(effect: any, $outStore: any = undefined) {
  const $effectError = restore(effect.failData, null);
        $effectError.reset(effect.done);

  const combineEffectState = (store:any) => combine({
    pending: effect.pending,
    error: $effectError,
    data: store
  })

  switch(typeof $outStore) {
    case 'undefined': {
      const doneDataStore = restore(effect.doneData, null);

      return combineEffectState(doneDataStore);
    }
    default: return combineEffectState($outStore)
  }
}