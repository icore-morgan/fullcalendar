import { Action } from './Action'

export function reduceViewType(viewType: string, action: Action): string {
  switch (action.type) {
    case 'CHANGE_VIEW_TYPE':
      return viewType = action.viewType
  }

  return viewType
}
