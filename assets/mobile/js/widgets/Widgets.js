import TownshipWidget from '@app/mobile/js/widgets/TownshipWidget';
import LineWidget from '@app/mobile/js/widgets/LineWidget';
import UserWidget from '@app/mobile/js/widgets/UserWidget';
import BudgetWidget from '@app/mobile/js/widgets/BudgetWidget';

var widgets = {
    "township._": {
        node: TownshipWidget
    },
    "line._": {
        node: LineWidget
    },
    "user._": {
        node: UserWidget
    },
    "budget._": {
        node: BudgetWidget
    }    

};
export default widgets;