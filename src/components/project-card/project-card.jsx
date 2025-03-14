import './project-card.scss'
export const ProjectCard = ({card}) => {

    const onCopyId = () => {
        navigator.clipboard.writeText(card.id)
    }

    return (
        <article  className='project-card'>
           <header className='project-card__header'>
               <img src="/assets/icons/photo-film.svg" alt="" className='project-card__header-icon'/>
               <a href="#" className='project-card__header-link'>
                   <h2 className='project-card__header-name'>{card.name}</h2>
               </a>
           </header>
            <div className="project-card__img">
                <img loading='lazy' src={card.img} alt={card.name}/>
            </div>
            <div className="project-card__body">
                <div className="project-card__property">
                    <div className="project-card__property-name">ID</div>
                    <div className="project-card__property-value">
                        <span>{card.id}</span>
                        <button onClick={onCopyId} className="project-card__property-copy">
                            <img loading='lazy' src="/assets/icons/copy.svg" alt=""
                                 className='project-card__property-icon'/>
                        </button>
                    </div>
                </div>

                <div className='project-card__row'>
                    <div className="project-card__property">
                        <span className="project-card__property-name">Тип файлов</span>
                        <div className="project-card__property-value">
                            <img loading='lazy' src="/assets/icons/file.svg" alt="" className='project-card__property-icon'/>
                            <span>{card.type}</span>
                        </div>
                    </div>

                    <div className="project-card__property">
                        <div className="project-card__property-name">Кол-во файлов</div>
                        <div className="project-card__property-value">{card.countsFiles}</div>
                    </div>
                </div>

                <div className="project-card__property">
                    <div className="project-card__property-name">Дата добавления</div>
                    <div className="project-card__property-value">{card.date}</div>
                </div>

                <div className="project-card__property">
                    <div className="project-card__property-name">Теги</div>
                    <div className="project-card__property-value">
                        <div className="project-card__tags">
                           <div>
                               {card?.tags.map((tag, index) => (
                                   <span  key={index} className='projcet-card__tags-item' style={{color: tag.color}}>#{tag.name}</span>
                               ))}
                           </div>
                            <button className="project-card__property-btn project-card__property-btn--small">
                                <img loading='lazy' src="/assets/icons/arrow-down.svg" alt=""/>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="project-card__property">
                    <div className="project-card__property-name">Нейросети</div>
                    <div className="project-card__property-value">
                        <img src="/assets/icons/trash.svg" alt=""/>
                        <img src="/assets/icons/belt.svg" alt=""/>
                        <img src="/assets/icons/smartphone.svg" alt=""/>
                        <img src="/assets/icons/sleep.svg" alt=""/>
                        <img src="/assets/icons/trash.svg" alt=""/>
                        <img src="/assets/icons/belt.svg" alt=""/>
                        <button className="project-card__property-btn project-card__property-btn--small">
                            <img loading='lazy' src="/assets/icons/arrow-down.svg" alt=""/>
                        </button>
                    </div>
                </div>

                <div className='project-card__row'>
                    <div className="project-card__property">
                        <span className="project-card__property-name">Количество</span>
                        <div className="project-card__property-value">
                            <img loading='lazy' src="/assets/icons/chart-network.svg" alt=""
                                 className='project-card__property-icon'/>
                            <span className='project-card__property-count'>{card.counts}</span>
                            <button className="project-card__property-btn project-card__property-btn--big">
                                <img loading='lazy' src="/assets/icons/eye.svg" alt=""/>
                            </button>
                        </div>
                    </div>

                    <div className="project-card__property">
                    <div className="project-card__property-name">Управление</div>
                        <div className="project-card__property-value">
                            <button className="project-card__property-btn project-card__property-btn--big">
                                <img loading='lazy' src="/assets/icons/setting.svg" alt=""/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}