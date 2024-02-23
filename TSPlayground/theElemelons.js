var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Melon = /** @class */ (function () {
    function Melon(weight, melonSort) {
        this.weight = weight;
        this.melonSort = melonSort;
    }
    Melon.prototype.toString = function () {
        return "Element: ".concat(this.constructor.name.split('melon')[0], " \nSort: ").concat(this.melonSort, "\nElement Index: ").concat(this.elementIndex);
    };
    return Melon;
}());
var Watermelon = /** @class */ (function (_super) {
    __extends(Watermelon, _super);
    function Watermelon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Watermelon.prototype, "elementIndex", {
        get: function () {
            return this.weight * this.melonSort.length;
        },
        enumerable: false,
        configurable: true
    });
    return Watermelon;
}(Melon));
var Firemelon = /** @class */ (function (_super) {
    __extends(Firemelon, _super);
    function Firemelon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Firemelon.prototype, "elementIndex", {
        get: function () {
            return this.weight * this.melonSort.length;
        },
        enumerable: false,
        configurable: true
    });
    return Firemelon;
}(Melon));
var Earthmelon = /** @class */ (function (_super) {
    __extends(Earthmelon, _super);
    function Earthmelon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Earthmelon.prototype, "elementIndex", {
        get: function () {
            return this.weight * this.melonSort.length;
        },
        enumerable: false,
        configurable: true
    });
    return Earthmelon;
}(Melon));
var Airmelon = /** @class */ (function (_super) {
    __extends(Airmelon, _super);
    function Airmelon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Airmelon.prototype, "elementIndex", {
        get: function () {
            return this.weight * this.melonSort.length;
        },
        enumerable: false,
        configurable: true
    });
    return Airmelon;
}(Melon));
var Melolemonmelon = /** @class */ (function (_super) {
    __extends(Melolemonmelon, _super);
    function Melolemonmelon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.index = 0;
        _this.arr = ['Water', 'Fire', 'Earth', 'Air',];
        return _this;
    }
    Melolemonmelon.prototype.morph = function () {
        var _a;
        var prev = (_a = this.arr.shift()) !== null && _a !== void 0 ? _a : '';
        this.arr.push(prev);
    };
    Melolemonmelon.prototype.toString = function () {
        return "Element: ".concat(this.arr[this.index], " \nSort: ").concat(this.melonSort, "\nElement Index: ").concat(this.elementIndex);
    };
    return Melolemonmelon;
}(Watermelon));
var watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());
var randomMelon = new Melolemonmelon(23, 'Big');
console.log(randomMelon.toString());
randomMelon.morph();
var randomMelon1 = new Melolemonmelon(49, 'Bigger');
console.log(randomMelon1.toString());
// Element: Water
// Sort: Kingsize
// Element Index: 100
