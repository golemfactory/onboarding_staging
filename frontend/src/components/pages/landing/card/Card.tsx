import { Icon, RightArrowIcon } from 'components/atoms/icons'
import style from './Card.module.css'
import { CardData } from '../../pages/landing/types'
import { Trans } from 'components/atoms'
export const Card = ({
  icon,
  title,
  description,
  badge,
  exploreLink,
  className,
  descriptionClassName,
  titleClassName = 'text-3xl',
  linkClassName,
}: CardData & {
  className?: string
  descriptionClassName?: string
  titleClassName?: string
  linkClassName?: string
}) => {
  return (
    <div className={`${style.card} ${className}`}>
      <div className={style.top}>
        {icon ? <Icon icon={icon} /> : ''}

        {badge ? (
          <div className={style.badge}>
            <Trans i18nKey={badge} ns="landing" />
          </div>
        ) : (
          ''
        )}
      </div>
      <div className={style.content}>
        <div className={`${titleClassName} ${style.title}`}>
          <Trans i18nKey={title} ns="landing" />
        </div>
        <div
          className={`${descriptionClassName || 'text-lg'} ${
            style.description
          } `}
        >
          <Trans i18nKey={description} ns="landing" />
        </div>
        {exploreLink ? (
          <a
            href={exploreLink}
            className={`${style.exploreButton} ${linkClassName}`}
          >
            {' '}
            <Trans i18nKey="explore" ns="landing" />
            <RightArrowIcon />
          </a>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}
