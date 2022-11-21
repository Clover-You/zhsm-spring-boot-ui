/**
 * <p>
 * Alibaba 矢量图标
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2022-11-21 21:38
 */
import Icon from '@ant-design/icons'
import { CustomIconComponentProps, IconComponentProps } from '@ant-design/icons/lib/components/Icon'

export type AlibabaSymbolIconProps = {
  icon: string
} & Partial<CustomIconComponentProps>

export const AlibabaSymbolIcon = (props: AlibabaSymbolIconProps) => {

  const MyIcon = (_: AlibabaSymbolIconProps) => {
    return <svg {..._}>
      <use href={`#icon-${props.icon}`}></use>
    </svg>
  }

  return <Icon {...props} component={MyIcon as React.ForwardRefExoticComponent<any>} />
}
