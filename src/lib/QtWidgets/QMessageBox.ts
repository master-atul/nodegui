import addon from '../utils/addon';
import { NodeWidget, QWidgetSignals } from './QWidget';
import { NativeElement } from '../core/Component';
import { QPushButton } from './QPushButton';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface QMessageBoxSignals extends QWidgetSignals {}

export enum StandardButton {
    Ok = 0x00000400,
    Open = 0x00002000,
    Save = 0x00000800,
    Cancel = 0x00400000,
    Close = 0x00200000,
    Discard = 0x00800000,
    Apply = 0x02000000,
    Reset = 0x04000000,
    RestoreDefaults = 0x08000000,
    Help = 0x01000000,
    SaveAll = 0x00001000,
    Yes = 0x00004000,
    YesToAll = 0x00008000,
    No = 0x00010000,
    NoToAll = 0x00020000,
    Abort = 0x00040000,
    Retry = 0x00080000,
    Ignore = 0x00100000,
    NoButton = 0x00000000,
}
export enum Icon {
    NoIcon = 0,
    Question = 4,
    Information = 1,
    Warning = 2,
    Critical = 3,
}

export enum ButtonRole {
    InvalidRole,
    AcceptRole,
    RejectRole,
    DestructiveRole,
    ActionRole,
    HelpRole,
    YesRole,
    NoRole,
    ApplyRole,
    ResetRole,
}
export class QMessageBox extends NodeWidget<QMessageBoxSignals> {
    native: NativeElement;
    constructor();
    constructor(parent: NodeWidget<any>);
    constructor(parent?: NodeWidget<any>) {
        let native;
        if (parent) {
            native = new addon.QMessageBox(parent.native);
        } else {
            native = new addon.QMessageBox();
        }
        super(native);
        this.native = native;
        this.setNodeParent(parent);
    }
    exec(): number {
        return this.native.exec();
    }

    setText(text: string): void {
        this.native.setProperty('text', text);
    }

    text(): string {
        return this.property('text').toString();
    }

    setInformativeText(informativeText: string): void {
        this.native.setProperty('informativeText', informativeText);
    }

    setDetailedText(detailedText: string): void {
        this.native.setProperty('detailedText', detailedText);
    }

    detailedText(): string {
        return this.property('detailedText').toString();
    }

    setStandardButtons(buttons: number): void {
        this.native.setProperty('standardButtons', buttons);
    }

    setDefaultButton(button: number | QPushButton): void {
        this.native.setDefaultButton(button);
    }

    addButton(arg: string | QPushButton | StandardButton, role: ButtonRole = ButtonRole.NoRole): QPushButton | void {
        if (arg instanceof QPushButton) {
            return this.native.addButton(arg.native, role);
        } else {
            this.native.addButton(arg, role);
        }
    }

    static about(parent: NodeWidget<any>, title: string, text: string): void {
        addon.QMessageBox.about(parent.native, title, text);
    }

    static aboutQt(parent: NodeWidget<any>, title: string): void {
        addon.QMessageBox.aboutQt(parent.native, title);
    }
}
