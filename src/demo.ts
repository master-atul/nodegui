import { QDateEdit } from './lib/QtWidgets/QDateEdit';
import { QSettings } from './lib/QtCore/QSettings';

const dateEdit = new QDateEdit();

const settings = new QSettings();
console.log(settings.native);
dateEdit.show();

(global as any).dateEdit = dateEdit;
