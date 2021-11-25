import AccountsWidget from '@app/web/js/widgets/AccountsWidget';
import BookkeepingWidget from '@app/web/js/widgets/BookkeepingWidget';

var widgets = {
    "account.s": {
        node: AccountsWidget,
        width: 3
    },
    "bookkeeping._": {
        node: BookkeepingWidget,
        width: 3
    }    
};
export default widgets;