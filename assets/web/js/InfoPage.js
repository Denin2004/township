import React, {Component} from 'react';
import { withTranslation } from 'react-i18next';
import { Typography, Descriptions, Card, Space } from 'antd';

class InfoPage extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return <React.Fragment>
        {this.props.info == 'contacts' ? <Card>
            <Descriptions title="Контакты" column={1} bordered={true}>
                <Descriptions.Item label="Фактический адрес">188650, обл.Ленинградская, р-н.Всеволожский, г.Сертолово, массив.Белоостров, ТСН.Фаворит</Descriptions.Item>
                <Descriptions.Item label="E-mail">favorit.tsn@yandex.ru</Descriptions.Item>
                <Descriptions.Item label="Телефон">+7 911 189 95 59</Descriptions.Item>
            </Descriptions>
            <Descriptions title="Реквизиты" column={1} bordered={true}>
                <Descriptions.Item label={'ТСН "Фаворит"'}>Товарищество собственников недвижимости "Фаворит"</Descriptions.Item>
                <Descriptions.Item label={null}>ТСН Фаворит</Descriptions.Item>
                <Descriptions.Item label="Юридический адрес">194358, ,г.Санкт-Петербург, пр. Просвещения, д.32, корп.2, кв.387 </Descriptions.Item>
                <Descriptions.Item label="ИНН">7802551492</Descriptions.Item>
                <Descriptions.Item label="КПП">780201001</Descriptions.Item>
                <Descriptions.Item label="ОГРН">1157847397256</Descriptions.Item>
                <Descriptions.Item label="Телефон">+7 911 189 95 59</Descriptions.Item>
            </Descriptions>
        </Card> : null}
        {this.props.info == 'payRules' ? <Card>
            <h3>Банковской картой</h3>
            <p>Для выбора оплаты товара с помощью банковской карты на соответствующей странице необходимо нажать кнопку <strong>Оплата заказа банковской картой</strong>. Оплата происходит через ПАО СБЕРБАНК с использованием банковских карт следующих платёжных систем:</p>
            <img src="/jpg/pay_systems.jpg"/>
            <p>Для оплаты (ввода реквизитов Вашей карты) Вы будете перенаправлены на платёжный шлюз ПАО СБЕРБАНК. Соединение с платёжным шлюзом и передача информации осуществляется в защищённом режиме с использованием протокола шифрования SSL. В случае если Ваш банк поддерживает технологию безопасного проведения интернет-платежей Verified By Visa, MasterCard SecureCode, MIR Accept, J-Secure, для проведения платежа также может потребоваться ввод специального пароля.<br/>
            <br/>
            Настоящий сайт поддерживает 256-битное шифрование. Конфиденциальность сообщаемой персональной информации обеспечивается ПАО СБЕРБАНК. Введённая информация не будет предоставлена третьим лицам за исключением случаев, предусмотренных законодательством РФ. Проведение платежей по банковским картам осуществляется в строгом соответствии с требованиями платёжных систем МИР, Visa Int., MasterCard Europe Sprl, JCB.
            </p>
         </Card> : null}
        </React.Fragment>;
    }
}

export default withTranslation()(InfoPage);