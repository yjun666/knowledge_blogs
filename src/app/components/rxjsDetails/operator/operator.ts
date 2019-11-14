import { Range, RangeItem } from './range';
import { ConcatAll, ConcatAllItem } from './concatAll';
import { Take, TakeItem } from './take';
import { TakeUntil, TakeUntilItem } from './takeUntil';
import { Ajax, AjaxItem } from './ajax';
import { MapTo, MapToItem } from './mapTo';
import { SwitchMap, SwitchMapItem } from './switchMap';
import { Zip, ZipItem } from './zip';
import { StartWith, StartWithItem } from './startWith';
import { TimeStamp, TimeStampItem } from './timeStamp';
import { RepeatWhenItem, RepeatWhen } from './repeatWhen';
import { Defer, DeferItem } from './defer';

export interface OperatorItem {
    rangeFun: () => void;
    concatAllFun: () => void;
    takeFun: () => void;
    ajaxFun: () => void;
    mapToFun: () => void;
    takeUntilFun: () => void;
    switchMapFun: () => void;
    zipFun: () => void;
    startWithFun: () => void;
    timeStampFun: () => void;
    repeatWhenFun: () => void;
    deferFun: () => void;
}


export class Operator implements OperatorItem {
    range: RangeItem;
    concatAll: ConcatAllItem;
    take: TakeItem;
    ajax: AjaxItem;
    mapTo: MapToItem;
    takeUntil: TakeUntilItem;
    switchMap: SwitchMapItem;
    zip: ZipItem;
    startWith: StartWithItem;
    timeStamp: TimeStampItem;
    repeatWhen: RepeatWhenItem;
    defer: DeferItem;
    constructor() {
        this.range = new Range();
        this.concatAll = new ConcatAll();
        this.take = new Take();
        this.ajax = new Ajax();
        this.mapTo = new MapTo();
        this.takeUntil = new TakeUntil();
        this.switchMap = new SwitchMap();
        this.zip = new Zip();
        this.startWith = new StartWith();
        this.timeStamp = new TimeStamp();
        this.repeatWhen = new RepeatWhen();
        this.defer = new Defer();
    }
    // zip
    startWithFun() {
        this.startWith.startWithApply();
    }
    // zip
    zipFun() {
        this.zip.zipApply();
    }
    // range
    rangeFun() {
        this.range.rangeApply();
    }
    // concatAll
    concatAllFun() {
        this.concatAll.concatAllApply();
    }
    // take
    takeFun() {
        this.take.takeApply();
    }
    // ajax
    ajaxFun() {
        this.ajax.ajaxApply();
    }
    // mapTo
    mapToFun() {
        this.mapTo.mapToApply();
    }
    // takeUntil
    takeUntilFun() {
        this.takeUntil.takeUntilApply();
    }
    // switchMap
    switchMapFun() {
        this.switchMap.switchMapApply();
    }
    // timeStamp
    timeStampFun() {
        this.timeStamp.timeStampApply();
    }
    // repeatWhen
    repeatWhenFun() {
        this.repeatWhen.repeatWhenApply();
    }
    // defer
    deferFun() {
        this.defer.deferApply();
    }
}
