import TownshipWidget from '@app/mobile/js/widgets/TownshipWidget';
import LineWidget from '@app/mobile/js/widgets/LineWidget';
import UserWidget from '@app/mobile/js/widgets/UserWidget';

var widgets = {
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