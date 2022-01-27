import React from "react";
import './RightSide.css';
import ListHeader from "../leftSide/components/listHeader/ListHeader";

function RightSide() {
    return (
        <div className="RightSide">
            <div className="RightSide__about-me">
                <p>
                    Долгое время я находилась вне IT сферы, и заинтересовалась ей довольно поздно. После рождения первого
                    ребенка я устала от повседневной жизни и решила попробовать себя там, где никогда себя не видела, и
                    у меня получилось. Я успешно прошла 3-х месячные курсы Netcracker, где мы изучали методики тестирования,
                    языков запросов, таких как SQL, а так же получили базовые навыки автоматизации тестирования.
                </p>
                <p>
                    После курсов мне одной из первых предложили место, однако в компанию я не попала, так как туда уже был
                    трудоустроен мой муж. Тем не менее я без особого труда устроилась в
                    региональную продуктовую компанию Haulmont в продукт Тезис, над повышением качества которого я и
                    работаю по сей день.
                </p>
                <p>
                    За это время я серьезно повысила свои навыки тестирования клиент-серверных приложений,
                    получила опыт работы в agile командах, а так же опыт менторинга молодых QA специалистов. В haulmont
                    я так же участвовала в обучающих программах, таких как обучение Linux системам.
                </p>
                <p>
                    Мне очень нравится
                    чувствовать что я своими действиями улучшаю качество программы. Мне нравится помогать программистам
                    исправлять огрехи в их коде, и я чувствую себя нужной, каждый раз, когда предотвращаю попадание
                    опасной ошибки в продакшен.
                </p>

            </div>
            <div className='RightSide__experience'>
                <ListHeader text='Опыт' />
                <div className="RightSide__experience-item">
                    <div className='RightSide__experience-company'>
                        <div className='RightSide__experience-company-name'>Haulmont</div>
                        <div className='RightSide__experience-company-years'>2017 по Н.В.</div>
                    </div>
                    <div className='RightSide__experience-goes'>
                        <div className='RightSide__experience-goes-item'>
                            <span className="dash">-</span> Тестирование и сборка релизов
                        </div>
                        <div className='RightSide__experience-goes-item'>
                            <span className="dash">-</span> Модификация баз данных для воспроизведения ошибок
                        </div>
                        <div className='RightSide__experience-goes-item'>
                            <span className="dash">-</span> Составление отчетов для воспроизведения проблем приложений
                        </div>
                        <div className='RightSide__experience-goes-item'>
                            <span className="dash">-</span> Помощь и обучение начинающих QA специалистов
                        </div>
                        <div className='RightSide__experience-goes-item'>
                            <span className="dash">-</span> Разработка документации для приложения
                        </div>
                        <div className='RightSide__experience-goes-item'>
                            <span className="dash">-</span> Оценка трудоемкости тестирования ПО
                        </div>
                    </div>
                </div>
            </div>

            <div className='RightSide__education'>
                <ListHeader text='Образование' />
                <div className='education__university'>
                    Тольяттинский Государственный Университет

                    <div className='education__part'>
                        Прикладная информатика-математика
                    </div>
                    <div className='education__years'>
                        2017-2019
                    </div>
                    <div className='education__degree'>
                        Магистр
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RightSide;