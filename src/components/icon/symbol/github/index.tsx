/**
 * <p>
 * GitHub 彩色图标
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2022-11-21 21:04
 */

import Icon from '@ant-design/icons'
import { CustomIconComponentProps, IconComponentProps } from '@ant-design/icons/lib/components/Icon'

const MyIcon = (props: CustomIconComponentProps) => {
  return <svg {...props}>
    <use href="#icon-github"></use>
  </svg>
}

export const GithubSymbolIcon = (props: Partial<CustomIconComponentProps>) => {
  return <Icon {...props} component={MyIcon as React.ForwardRefExoticComponent<any>} />
}
