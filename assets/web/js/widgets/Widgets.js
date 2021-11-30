import AccountsWidget from '@app/web/js/widgets/AccountsWidget';
import BookkeepingWidget from '@app/web/js/widgets/BookkeepingWidget';
import TownshipWidget from '@app/web/js/widgets/TownshipWidget';
import LineWidget from '@app/web/js/widgets/LineWidget';

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
    "land.line": {
        node: LineWidget,
        width: 5
    }
};
export default widgets;