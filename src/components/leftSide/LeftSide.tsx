import React from "react";
import './LeftSide.css';
import ListItem from "./components/listItem/ListItem";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPhone, faMailBulk, faMessage, faMapPin} from '@fortawesome/free-solid-svg-icons'
import SkillList from "./components/skillLIst/SkillList";
import SkillLine from "./components/skillLine/SkillLine";
import Tag from "./components/tag/Tag";
import ListHeader from "./components/listHeader/ListHeader";

function LeftSide() {
    return (
        <div className="LeftSide">
            <ListItem header="Контакты">
                <div className="contact__item">
                    <FontAwesomeIcon icon={faPhone} className="contact__item_icon"/> +7 (987) 457-15-67
                </div>
                <div className="contact__item">
                    <FontAwesomeIcon icon={faMailBulk} className="contact__item_icon"/> tootoowiki@gmail.com
                </div>
                <div className="contact__item">
                    <FontAwesomeIcon icon={faMessage} className="contact__item_icon"/> @TooWiki (Telegram)
                </div>
                <div className="contact__item">
                    <FontAwesomeIcon icon={faMapPin} className="contact__item_icon"/> г. Тольятти
                </div>
            </ListItem>
            <SkillList header="Навыки">
                <SkillLine level={80} title="Ручное тестирование"/>
                <SkillLine level={70} title="SQL"/>
                <SkillLine level={60} title="Agile"/>
                <SkillLine level={45} title="Fiddler"/>
                <SkillLine level={40} title="Linux"/>
            </SkillList>
            <div className="Tags">
                <ListHeader text='Хобби' />
                <div className="Tags__list">
                    <Tag text="музыка"/>
                    <Tag text="книги"/>
                    <Tag text="кино/сериалы"/>
                    <Tag text="настолки"/>
                </div>
            </div>
            <div className="references">
                <ListHeader text='Рекомендации' />
                <div className='references__list'>
                    <div className='reference__item'>
                        <div className='references__name'>Иван Алексеев</div>
                        <div className='references__job-title'>Frontend-developer Yandex</div>
                        <span className='references__contact'>Telegram:</span> @jegius
                    </div>
                    <div className='reference__item'>
                        <div className='references__name'>Андрей Синяков</div>
                        <div className='references__job-title'>QA Lead ВТБ</div>
                        <span className='references__contact'>Telegram:</span> @Andrsin1
                    </div>
                    <div className='reference__item'>
                        <div className='references__name'>Алексей Перминов</div>
                        <div className='references__job-title'>AT Engineer</div>
                        <span className='references__contact'>Phone:</span> +7 986 957-91-80
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSide;