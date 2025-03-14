import './project-card.scss'
import {Button} from "../../shared/UI/button/button.jsx";

export const ProjectCard = ({card}) => {

    if (!card) return null;
    const onCopyId = () => {
        navigator.clipboard.writeText(card.id)
        /*тут можно добавить тултип с текстом о том что id скопирован*/
    }

    const shortenString = (str) => {
        if (str.length <= 8) return str;
        const first = str.slice(0, 4);
        const last = str.slice(-4);
        return `${first}...${last}`;
    }

    return (
        <article className="project-card">

            <header className="project-card__header">
                <img
                    src="/assets/icons/photo-film.svg"
                    alt=""
                    className="project-card__header-icon"
                    aria-hidden="true"
                />
                <a href="#" className="project-card__header-link">
                    <h3 className="project-card__header-name">{card.name}</h3>
                </a>
            </header>

            <div className="project-card__img">
                <img
                    loading="lazy"
                    src={card?.img}
                    alt={`Обложка проекта ${card.name}`}
                />
            </div>

            <div className="project-card__body">
                {/* ID */}
                <div className="project-card__property">
                    <span className="project-card__property-name">ID</span>
                    <div className="project-card__property-value">
                        <span>{shortenString(card.id)}</span>
                        <Button
                            variant='transparent'
                            onClick={onCopyId}
                            className="project-card__property-copy"
                            title="Скопировать ID"
                            aria-label="Скопировать ID"
                        >
                            <img
                                loading="lazy"
                                src="/assets/icons/copy.svg"
                                alt=""
                                aria-hidden="true"
                            />
                        </Button>
                    </div>
                </div>

                <div className="project-card__row">
                    {/* File type */}
                    <div className="project-card__property">
                        <span className="project-card__property-name">Тип файлов</span>
                        <div className="project-card__property-value">
                            <img
                                loading="lazy"
                                src="/assets/icons/file.svg"
                                alt=""
                                className="project-card__property-icon"
                                aria-hidden="true"
                            />
                            <span>{card.type}</span>
                        </div>
                    </div>

                    {/* Files count */}
                    <div className="project-card__property">
                        <span className="project-card__property-name">Кол-во файлов</span>
                        <div className="project-card__property-value">{card.countsFiles}</div>
                    </div>
                </div>

                {/* Date */}
                <div className="project-card__property">
                    <span className="project-card__property-name">Дата добавления</span>
                    <div className="project-card__property-value">{card.date}</div>
                </div>

                {/* Tags */}
                <div className="project-card__property">
                    <span className="project-card__property-name">Теги</span>
                    <div className="project-card__property-value">
                        <div className="project-card__tags">
                            {(card.tags || []).length > 0 ? (
                                <ul className="project-card__tags-list">
                                    {card.tags?.map((tag, index) => (
                                        <li key={index}>
                                            <span
                                                className="project-card__tags-item"
                                                style={{color: tag.color}}
                                             >
                                                #{tag.name}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <span className="project-card__tags-empty">Тегов нет</span>
                            )}
                            <Button
                                size='small'
                                variant='dark'
                                aria-label="Показать все теги"
                            >
                                <img
                                    loading="lazy"
                                    src="/assets/icons/arrow-down.svg"
                                    alt=""
                                    aria-hidden="true"
                                />
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Neural Networks */}
                <div className="project-card__property">
                    <span className="project-card__property-name">Нейросети</span>
                    <div className="project-card__property-value">
                        <ul className="project-card__networks">
                            <li>
                                <img src="/assets/icons/trash.svg"
                                     alt=""
                                     aria-hidden="true"
                                />
                            </li>
                            <li>
                                <img src="/assets/icons/belt.svg"
                                     alt=""
                                     aria-hidden="true"
                                />
                            </li>
                            <li>
                                <img src="/assets/icons/smartphone.svg"
                                     alt=""
                                     aria-hidden="true"
                                />
                            </li>
                            <li>
                                <img src="/assets/icons/sleep.svg"
                                     alt=""
                                     aria-hidden="true"
                                />
                            </li>
                            <li>
                                <img src="/assets/icons/trash.svg"
                                     alt=""
                                     aria-hidden="true"
                                />
                            </li>
                            <li>
                                <img src="/assets/icons/belt.svg"
                                     alt=""
                                     aria-hidden="true"
                                />
                            </li>
                        </ul>
                        <Button
                            size='small'
                            variant='dark'
                            className="project-card__property-btn project-card__property-btn--small"
                            aria-label="Показать все нейросети"
                        >
                        <img
                                loading="lazy"
                                src="/assets/icons/arrow-down.svg"
                                alt=""
                                aria-hidden="true"
                            />
                        </Button>
                    </div>
                </div>

                <div className="project-card__row">
                    {/* Counter */}
                    <div className="project-card__property">
                        <span className="project-card__property-name">Количество</span>
                        <div className="project-card__property-value">
                            <img
                                loading="lazy"
                                src="/assets/icons/chart-network.svg"
                                alt=""
                                className="project-card__property-icon"
                                aria-hidden="true"
                            />
                            <span className="project-card__property-count">{card.counts}</span>
                            <Button
                                size='medium'
                                variant='gray'
                                className="project-card__property-btn project-card__property-btn--big"
                                aria-label="Просмотреть статистику"
                            >
                                <img
                                    loading="lazy"
                                    src="/assets/icons/eye.svg"
                                    alt=""
                                    aria-hidden="true"
                                />
                            </Button>
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="project-card__property">
                        <span className="project-card__property-name">Управление</span>
                        <div className="project-card__property-value">
                            <Button
                                size='medium'
                                variant='gray'
                                className="project-card__property-btn project-card__property-btn--big"
                                aria-label="Настройки проекта"
                            >
                                <img
                                    loading="lazy"
                                    src="/assets/icons/setting.svg"
                                    alt=""
                                    aria-hidden="true"
                                />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}