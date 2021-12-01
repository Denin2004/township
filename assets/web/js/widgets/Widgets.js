import AccountsWidget from '@app/web/js/widgets/AccountsWidget';
import BookkeepingWidget from '@app/web/js/widgets/BookkeepingWidget';
import TownshipWidget from '@app/web/js/widgets/TownshipWidget';
import LineWidget from '@app/web/js/widgets/LineWidget';
import UserWidget from '@app/web/js/widgets/UserWidget';

var widgets = {
    "account.s": {
        node: AccountsWidget,
        width: 3
    },
    "bookkeeping._": {
        node: BookkeepingWidget,
        width: 5
    },
    "township._": {
        node: TownshipWidget,
        width: 5
    },
    "line._": {
        node: LineWidget,
        width: 5
    },
    "user._": {
        node: UserWidget,
        width: 5
    }
};
export default widgets;