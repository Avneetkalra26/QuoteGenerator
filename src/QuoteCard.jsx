import Card from 'react-bootstrap/Card';
import style from './CssModule/Quote.module.css'
import BottomActions from './BottomActions';

function QuoteCard({h,a,q}) {
    return (
        <Card className={`px-2 ${style.card}`}>
            <Card.Body>
                <p className={style.quoteText}>{q}</p>
                <p className={style.quoteAuthor}>{a}</p>
                <BottomActions h={h} />
            </Card.Body>
        </Card>
    );
}

export default QuoteCard;