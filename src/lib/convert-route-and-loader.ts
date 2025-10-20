import { ActionFunction, LoaderFunction } from 'react-router'

type ThenParams<T = any> = {
  clientLoader?: LoaderFunction
  loader?: T
  clientAction?: ActionFunction
  action?: ActionFunction
  default: React.ComponentType
}

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
