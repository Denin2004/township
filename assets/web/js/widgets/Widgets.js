import AccountsWidget from '@app/web/js/widgets/AccountsWidget';
import BookkeepingWidget from '@app/web/js/widgets/BookkeepingWidget';
import TownshipWidget from '@app/web/js/widgets/TownshipWidget';
import LineWidget from '@app/web/js/widgets/LineWidget';
import UserWidget from '@app/web/js/widgets/UserWidget';
import BudgetWidget from '@app/web/js/widgets/BudgetWidget';

var widgets = {
    "account.s": {
        node: AccountsWidget,
        width: 5
    },
    "bookkeeping._": {
        node: BookkeepingWidget,
        width: 5
    },
    "township._": {
        node: TownshipWidget,
        width: 9
    },
    "line._": {
        node: LineWidget,
        width: 9
    },
    "user._": {
        node: UserWidget,
        width: 9
    },
    "budget._": {
        node: BudgetWidget,
        width: 7
    }    
};
export default widgets;