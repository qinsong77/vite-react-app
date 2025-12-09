import { ActionFunction, LoaderFunction } from 'react-router'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ThenParams<T = any> = {
  clientLoader?: LoaderFunction
  loader?: T
  clientAction?: ActionFunction
  action?: ActionFunction
  default: React.ComponentType
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const convertRouteAndLoader = <T = any>(m: ThenParams<T>) => {
  const {
    clientLoader,
    clientAction,
    loader,
    action,
    default: Component,
    ...rest
  } = m
  return {
    ...rest,
    loader,
    clientLoader,
    clientAction,
    action,
    Component,
  }
}
