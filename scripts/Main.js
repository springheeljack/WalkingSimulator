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
define("Boilerplate/Enums/Align", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Align = void 0;
    var Align;
    (function (Align) {
        Align[Align["Default"] = 0] = "Default";
        Align[Align["TopLeft"] = 1] = "TopLeft";
        Align[Align["Top"] = 2] = "Top";
        Align[Align["TopRight"] = 3] = "TopRight";
        Align[Align["Left"] = 4] = "Left";
        Align[Align["Center"] = 5] = "Center";
        Align[Align["Right"] = 6] = "Right";
        Align[Align["BottomLeft"] = 7] = "BottomLeft";
        Align[Align["Bottom"] = 8] = "Bottom";
        Align[Align["BottomRight"] = 9] = "BottomRight";
    })(Align = exports.Align || (exports.Align = {}));
});
define("Boilerplate/Enums/Fonts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Fonts = void 0;
    var Fonts;
    (function (Fonts) {
        Fonts["Arial"] = "Arial";
        Fonts["LucidaConsole"] = "Lucida Console";
        Fonts["Win95"] = "w95fa";
        Fonts["PixelOperator"] = "PixelOperator";
    })(Fonts = exports.Fonts || (exports.Fonts = {}));
});
define("Boilerplate/Classes/Vector2", ["require", "exports", "Boilerplate/Modules/MathHelper"], function (require, exports, MathHelper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Vector2 = void 0;
    var Vector2 = /** @class */ (function () {
        function Vector2(x, y) {
            this.x = x;
            this.y = y;
        }
        Vector2.zero = function () {
            return new Vector2(0, 0);
        };
        Vector2.unitFromAngle = function (angle) {
            return new Vector2(Math.cos(angle), Math.sin(angle));
        };
        Vector2.prototype.clone = function () {
            return new Vector2(this.x, this.y);
        };
        Vector2.prototype.angle = function () {
            return Math.atan2(this.y, this.x);
        };
        Vector2.prototype.add = function (vector2) {
            return new Vector2(this.x + vector2.x, this.y + vector2.y);
        };
        Vector2.prototype.addNumber = function (number) {
            return new Vector2(this.x + number, this.y + number);
        };
        Vector2.prototype.subtract = function (vector2) {
            return new Vector2(this.x - vector2.x, this.y - vector2.y);
        };
        Vector2.prototype.subtractNumber = function (number) {
            return new Vector2(this.x - number, this.y - number);
        };
        Vector2.prototype.multiply = function (vector2) {
            return new Vector2(this.x * vector2.x, this.y * vector2.y);
        };
        Vector2.prototype.multiplyNumber = function (number) {
            return new Vector2(this.x * number, this.y * number);
        };
        Vector2.prototype.divide = function (vector2) {
            return new Vector2(this.x / vector2.x, this.y / vector2.y);
        };
        Vector2.prototype.divideNumber = function (number) {
            return new Vector2(this.x / number, this.y / number);
        };
        Vector2.prototype.distanceSquared = function (position) {
            return Math.pow((this.x - position.x), 2) + Math.pow((this.y - position.y), 2);
        };
        Vector2.prototype.distance = function (position) {
            return Math.sqrt(this.distanceSquared(position));
        };
        Vector2.prototype.lengthSquared = function () {
            return Math.pow((this.x), 2) + Math.pow((this.y), 2);
        };
        Vector2.prototype.length = function () {
            return Math.sqrt(this.lengthSquared());
        };
        Vector2.prototype.normalise = function () {
            var length = this.length();
            this.x /= length;
            this.y /= length;
        };
        Vector2.prototype.intersectsRectangle = function (rectangle) {
            return MathHelper_1.MathHelper.intersectsRectanglePoint(rectangle, this);
        };
        Vector2.prototype.intersectsCircle = function (circle) {
            return MathHelper_1.MathHelper.intersectsCirclePoint(circle, this);
        };
        return Vector2;
    }());
    exports.Vector2 = Vector2;
});
define("Boilerplate/Classes/Rectangle", ["require", "exports", "Boilerplate/Modules/MathHelper", "Boilerplate/Classes/Vector2"], function (require, exports, MathHelper_2, Vector2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Rectangle = void 0;
    var Rectangle = /** @class */ (function () {
        function Rectangle(position, size) {
            this.position = position;
            this.size = size;
        }
        Rectangle.zero = function () {
            return new Rectangle(Vector2_1.Vector2.zero(), Vector2_1.Vector2.zero());
        };
        Rectangle.prototype.clone = function () {
            return new Rectangle(this.position.clone(), this.size.clone());
        };
        Rectangle.prototype.intersectsPoint = function (point) {
            return MathHelper_2.MathHelper.intersectsRectanglePoint(this, point);
        };
        Rectangle.prototype.intersectsCircle = function (circle) {
            return MathHelper_2.MathHelper.intersectsCircleRectangle(circle, this);
        };
        Rectangle.prototype.intersectsRectangle = function (rectangle) {
            return MathHelper_2.MathHelper.intersectsRectangleRectangle(rectangle, this);
        };
        Rectangle.prototype.top = function () {
            return this.position.y;
        };
        Rectangle.prototype.bottom = function () {
            return this.position.y + this.size.y;
        };
        Rectangle.prototype.left = function () {
            return this.position.x;
        };
        Rectangle.prototype.right = function () {
            return this.position.x + this.size.x;
        };
        Rectangle.prototype.center = function () {
            return this.position.add(this.size.divideNumber(2));
        };
        Rectangle.prototype.topLeft = function () {
            return this.position;
        };
        Rectangle.prototype.topRight = function () {
            return this.position.add(new Vector2_1.Vector2(this.size.x, 0));
        };
        Rectangle.prototype.bottomLeft = function () {
            return this.position.add(new Vector2_1.Vector2(0, this.size.y));
        };
        Rectangle.prototype.bottomRight = function () {
            return this.position.add(new Vector2_1.Vector2(this.size.x, this.size.y));
        };
        Rectangle.prototype.topCenter = function () {
            return this.center().subtract(new Vector2_1.Vector2(0, this.size.y / 2));
        };
        Rectangle.prototype.bottomCenter = function () {
            return this.center().add(new Vector2_1.Vector2(0, this.size.y / 2));
        };
        Rectangle.prototype.leftCenter = function () {
            return this.center().subtract(new Vector2_1.Vector2(this.size.x / 2, 0));
        };
        Rectangle.prototype.rightCenter = function () {
            return this.center().add(new Vector2_1.Vector2(this.size.x / 2, 0));
        };
        Rectangle.prototype.offset = function (offset) {
            return new Rectangle(this.position.add(offset), this.size);
        };
        Rectangle.fromRawValues = function (x, y, width, height) {
            return new Rectangle(new Vector2_1.Vector2(x, y), new Vector2_1.Vector2(width, height));
        };
        return Rectangle;
    }());
    exports.Rectangle = Rectangle;
});
define("Boilerplate/Modules/MathHelper", ["require", "exports", "Boilerplate/Classes/Vector2"], function (require, exports, Vector2_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MathHelper = void 0;
    var MathHelper;
    (function (MathHelper) {
        function intersectsRectanglePoint(rectangle, point) {
            return point.x >= rectangle.position.x
                && point.x <= rectangle.position.x + rectangle.size.x
                && point.y >= rectangle.position.y
                && point.y <= rectangle.position.y + rectangle.size.y;
        }
        MathHelper.intersectsRectanglePoint = intersectsRectanglePoint;
        function intersectsCirclePoint(circle, point) {
            return circle.position.distanceSquared(point) <= Math.pow(circle.radius, 2);
        }
        MathHelper.intersectsCirclePoint = intersectsCirclePoint;
        function intersectsCircleRectangle(circle, rectangle) {
            return new Vector2_2.Vector2(Math.max(rectangle.left(), Math.min(rectangle.right(), circle.position.x)), Math.max(rectangle.top(), Math.min(rectangle.bottom(), circle.position.y)))
                .distanceSquared(circle.position) <= Math.pow(circle.radius, 2);
        }
        MathHelper.intersectsCircleRectangle = intersectsCircleRectangle;
        function intersectsRectangleRectangle(rectangle1, rectangle2) {
            return rectangle1.left() < rectangle2.right()
                && rectangle1.right() > rectangle2.left()
                && rectangle1.top() < rectangle2.bottom()
                && rectangle1.bottom() > rectangle2.top();
        }
        MathHelper.intersectsRectangleRectangle = intersectsRectangleRectangle;
        function randomInt(lower, upper) {
            var difference = (upper + 1) - lower;
            var random = Math.random() * difference;
            return Math.ceil(random + lower) - 1;
        }
        MathHelper.randomInt = randomInt;
    })(MathHelper = exports.MathHelper || (exports.MathHelper = {}));
});
define("Boilerplate/Classes/Circle", ["require", "exports", "Boilerplate/Modules/MathHelper", "Boilerplate/Classes/Vector2"], function (require, exports, MathHelper_3, Vector2_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Circle = void 0;
    var Circle = /** @class */ (function () {
        function Circle(position, radius) {
            this.position = position;
            this.radius = radius;
        }
        Circle.zero = function () {
            return new Circle(Vector2_3.Vector2.zero(), 0);
        };
        Circle.prototype.clone = function () {
            return new Circle(this.position.clone(), this.radius);
        };
        Circle.prototype.intersectsPoint = function (point) {
            return MathHelper_3.MathHelper.intersectsCirclePoint(this, point);
        };
        Circle.prototype.intersectsRectangle = function (rectangle) {
            return MathHelper_3.MathHelper.intersectsCircleRectangle(this, rectangle);
        };
        return Circle;
    }());
    exports.Circle = Circle;
});
define("Boilerplate/Classes/Colour", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Colour = void 0;
    var Colour = /** @class */ (function () {
        function Colour(r, g, b) {
            this.r = Math.round(this.boundValue(r));
            this.g = Math.round(this.boundValue(g));
            this.b = Math.round(this.boundValue(b));
            this.setHexString();
        }
        Colour.prototype.getR = function () { return this.r; };
        Colour.prototype.getG = function () { return this.g; };
        Colour.prototype.getB = function () { return this.b; };
        Colour.prototype.getHexString = function () { return this.hexString; };
        Colour.prototype.setHexString = function () {
            var rHex = this.r.toString(16);
            var gHex = this.g.toString(16);
            var bHex = this.b.toString(16);
            this.hexString = '#';
            if (rHex.length === 1)
                this.hexString += '0';
            this.hexString += rHex;
            if (gHex.length === 1)
                this.hexString += '0';
            this.hexString += gHex;
            if (bHex.length === 1)
                this.hexString += '0';
            this.hexString += bHex;
        };
        Colour.prototype.boundValue = function (value) {
            if (value < 0)
                return 0;
            if (value > 255)
                return 255;
            return value;
        };
        Colour.prototype.multiply = function (number) {
            return new Colour(this.r * number, this.g * number, this.b * number);
        };
        Colour.prototype.add = function (number) {
            return new Colour(this.r + number, this.g + number, this.b + number);
        };
        Colour.black = new Colour(0, 0, 0);
        Colour.white = new Colour(255, 255, 255);
        Colour.red = new Colour(255, 0, 0);
        Colour.yellow = new Colour(255, 255, 0);
        Colour.green = new Colour(0, 255, 0);
        Colour.cyan = new Colour(0, 255, 255);
        Colour.blue = new Colour(0, 0, 255);
        Colour.magenta = new Colour(255, 0, 255);
        return Colour;
    }());
    exports.Colour = Colour;
});
define("Boilerplate/Classes/Content", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Content = void 0;
    var Content = /** @class */ (function () {
        function Content() {
            this.texturesRecord = {};
        }
        Content.prototype.loadTextures = function (enumType) {
            var _this = this;
            var textureDiv = document.getElementById('textures');
            Object.keys(enumType).map(function (x) { return enumType[x]; }).forEach(function (textureName) {
                var texture = new Image();
                texture.src = 'textures/' + textureName + '.png';
                // image.width = 64;
                // image.height = 64;
                textureDiv.append(texture);
                _this.texturesRecord[textureName] = texture;
            });
        };
        Content.prototype.getTexture = function (textureName) {
            return this.texturesRecord[textureName];
        };
        return Content;
    }());
    exports.Content = Content;
});
define("Boilerplate/Classes/Context2D", ["require", "exports", "Boilerplate/Enums/Align", "Boilerplate/Classes/Vector2"], function (require, exports, Align_1, Vector2_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    HTMLCanvasElement.prototype.getContext2D = function () {
        return this.getContext('2d');
    };
    CanvasRenderingContext2D.prototype.drawString = function (text, position, size, font, colour, align) {
        this.fillStyle = colour.getHexString();
        this.setFont(font, size);
        this.setAlign(align);
        var transform = this.getTransform();
        this.resetTransform();
        this.fillText(text, position.x, position.y);
        this.setTransform(transform);
    };
    CanvasRenderingContext2D.prototype.drawTransformString = function (text, position, size, font, colour, align) {
        this.fillStyle = colour.getHexString();
        this.setFont(font, size);
        this.setAlign(align);
        this.fillText(text, position.x, position.y);
    };
    CanvasRenderingContext2D.prototype.measureString = function (text, size, font, align) {
        this.setFont(font, size);
        this.setAlign(align);
        return this.measureText(text);
    };
    CanvasRenderingContext2D.prototype.drawFillRectangle = function (rectangle, colour) {
        this.fillStyle = colour.getHexString();
        this.fillRect(rectangle.position.x, rectangle.position.y, rectangle.size.x, rectangle.size.y);
    };
    CanvasRenderingContext2D.prototype.drawStrokeRectangle = function (rectangle, colour, lineWidth) {
        if (lineWidth === void 0) { lineWidth = 2; }
        this.strokeStyle = colour.getHexString();
        this.lineWidth = lineWidth;
        this.strokeRect(rectangle.position.x, rectangle.position.y, rectangle.size.x, rectangle.size.y);
    };
    CanvasRenderingContext2D.prototype.drawBorderedRectangle = function (rectangle, fillColour, borderColour, lineWidth) {
        if (lineWidth === void 0) { lineWidth = 2; }
        this.drawFillRectangle(rectangle, fillColour);
        this.drawStrokeRectangle(rectangle, borderColour, lineWidth);
    };
    CanvasRenderingContext2D.prototype.drawFillCircle = function (circle, colour) {
        this.fillStyle = colour.getHexString();
        this.beginPath();
        this.ellipse(circle.position.x, circle.position.y, circle.radius, circle.radius, 0, 0, 2 * Math.PI);
        this.fill();
    };
    CanvasRenderingContext2D.prototype.drawStrokeCircle = function (circle, colour, lineWidth) {
        this.strokeStyle = colour.getHexString();
        this.lineWidth = lineWidth;
        this.beginPath();
        this.ellipse(circle.position.x, circle.position.y, circle.radius, circle.radius, 0, 0, 2 * Math.PI);
        this.stroke();
    };
    CanvasRenderingContext2D.prototype.drawBorderedCircle = function (circle, fillColour, borderColour, lineWidth) {
        if (lineWidth === void 0) { lineWidth = 2; }
        this.drawFillCircle(circle.position, circle.radius, fillColour);
        this.drawStrokeCircle(circle.position, circle.radius, borderColour, lineWidth);
    };
    CanvasRenderingContext2D.prototype.setAlign = function (align) {
        if (align === Align_1.Align.Bottom
            || align === Align_1.Align.BottomLeft
            || align === Align_1.Align.BottomRight)
            this.textBaseline = "bottom";
        else if (align === Align_1.Align.Top
            || align === Align_1.Align.TopLeft
            || align === Align_1.Align.TopRight)
            this.textBaseline = "top";
        else
            this.textBaseline = "middle";
        if (align === Align_1.Align.Left
            || align === Align_1.Align.TopLeft
            || align === Align_1.Align.BottomLeft)
            this.textAlign = "left";
        else if (align === Align_1.Align.Right
            || align === Align_1.Align.TopRight
            || align === Align_1.Align.BottomRight)
            this.textAlign = "right";
        else
            this.textAlign = "center";
    };
    CanvasRenderingContext2D.prototype.setFont = function (font, size) {
        this.font = size + "px " + font;
    };
    CanvasRenderingContext2D.prototype.drawTextureRectangle = function (texture, rectangle, rotation, origin) {
        if (rotation == null) {
            this.drawImage(texture, rectangle.position.x, rectangle.position.y, rectangle.size.x, rectangle.size.y);
            return;
        }
        if (origin == null)
            origin = rectangle.center();
        debug();
        var originalTransform = this.getTransform();
        this.translate(origin.x, origin.y);
        this.rotate(rotation);
        this.translate(-origin.x, -origin.y);
        this.drawImage(texture, rectangle.position.x, rectangle.position.y, rectangle.size.x, rectangle.size.y);
        this.setTransform(originalTransform);
    };
    CanvasRenderingContext2D.prototype.getCanvasSize = function () {
        return new Vector2_4.Vector2(this.canvas.width, this.canvas.height);
    };
    CanvasRenderingContext2D.prototype.getTranslation = function () {
        var transform = this.getTransform();
        return new Vector2_4.Vector2(transform.e, transform.f);
    };
});
define("Boilerplate/Enums/MouseButton", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MouseButton = void 0;
    var MouseButton;
    (function (MouseButton) {
        MouseButton[MouseButton["Left"] = 0] = "Left";
        MouseButton[MouseButton["Middle"] = 1] = "Middle";
        MouseButton[MouseButton["Right"] = 2] = "Right";
        MouseButton[MouseButton["Back"] = 3] = "Back";
        MouseButton[MouseButton["Forward"] = 4] = "Forward";
    })(MouseButton = exports.MouseButton || (exports.MouseButton = {}));
});
define("Boilerplate/Enums/Scroll", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Scroll = void 0;
    var Scroll;
    (function (Scroll) {
        Scroll[Scroll["None"] = 1] = "None";
        Scroll[Scroll["Up"] = 2] = "Up";
        Scroll[Scroll["Down"] = 3] = "Down";
    })(Scroll = exports.Scroll || (exports.Scroll = {}));
});
define("Boilerplate/Classes/MouseState", ["require", "exports", "Boilerplate/Enums/Scroll", "Boilerplate/Classes/Vector2"], function (require, exports, Scroll_1, Vector2_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MouseState = void 0;
    var MouseState = /** @class */ (function () {
        function MouseState() {
            this.position = Vector2_5.Vector2.zero();
            this.scroll = Scroll_1.Scroll.None;
            this.buttonDown = {};
            this.unusedClick = {};
            this.unusedDown = {};
        }
        MouseState.prototype.isButtonDown = function (mouseButton) {
            return this.buttonDown[mouseButton] === true;
        };
        MouseState.prototype.isButtonUp = function (mouseButton) {
            return !this.isButtonDown(mouseButton);
        };
        MouseState.prototype.hasUnusedClick = function (mouseButton) {
            return this.unusedClick[mouseButton] === true;
        };
        MouseState.prototype.hasUnusedDown = function (mouseButton) {
            return this.unusedDown[mouseButton] === true;
        };
        MouseState.prototype.setClickUsed = function (mouseButton) {
            this.unusedClick[mouseButton] = false;
        };
        MouseState.prototype.setDownUsed = function (mouseButton) {
            this.unusedDown[mouseButton] = false;
        };
        MouseState.prototype.clone = function () {
            var clone = new MouseState();
            clone.position = this.position.clone();
            clone.scroll = this.scroll;
            clone.buttonDown = Object.assign({}, this.buttonDown);
            clone.unusedClick = Object.assign({}, this.unusedClick);
            clone.unusedDown = Object.assign({}, this.unusedDown);
            return clone;
        };
        return MouseState;
    }());
    exports.MouseState = MouseState;
});
define("Boilerplate/Enums/Keys", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Keys = void 0;
    var Keys;
    (function (Keys) {
        Keys["W"] = "KeyW";
        Keys["A"] = "KeyA";
        Keys["S"] = "KeyS";
        Keys["D"] = "KeyD";
        Keys["PauseBreak"] = "Pause";
    })(Keys = exports.Keys || (exports.Keys = {}));
});
define("Boilerplate/Classes/KeyboardState", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.KeyboardState = void 0;
    var KeyboardState = /** @class */ (function () {
        function KeyboardState() {
            this.keyStates = {};
        }
        KeyboardState.prototype.isKeyDown = function (key) {
            return this.keyStates[key] === true;
        };
        KeyboardState.prototype.isKeyUp = function (key) {
            return !this.isKeyDown(key);
        };
        KeyboardState.prototype.setKeyDown = function (key) {
            this.keyStates[key] = true;
        };
        KeyboardState.prototype.setKeyUp = function (key) {
            this.keyStates[key] = false;
        };
        KeyboardState.prototype.clone = function () {
            var clone = new KeyboardState();
            clone.keyStates = Object.assign({}, this.keyStates);
            return clone;
        };
        return KeyboardState;
    }());
    exports.KeyboardState = KeyboardState;
});
define("Boilerplate/Classes/Input", ["require", "exports", "Boilerplate/Classes/MouseState", "Boilerplate/Enums/Scroll", "Boilerplate/Classes/KeyboardState", "Boilerplate/Enums/Keys"], function (require, exports, MouseState_1, Scroll_2, KeyboardState_1, Keys_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Input = void 0;
    var Input = /** @class */ (function () {
        function Input(canvas) {
            var _this = this;
            this.previousMouseState = new MouseState_1.MouseState();
            this.currentMouseState = new MouseState_1.MouseState();
            this.runningMouseState = new MouseState_1.MouseState();
            this.previousKeyboardState = new KeyboardState_1.KeyboardState();
            this.currentKeyboardState = new KeyboardState_1.KeyboardState();
            this.runningKeyboardState = new KeyboardState_1.KeyboardState();
            canvas.addEventListener('mousedown', function (event) {
                _this.runningMouseState.buttonDown[event.button] = true;
                _this.runningMouseState.unusedDown[event.button] = true;
            });
            canvas.addEventListener('mouseup', function (event) {
                _this.runningMouseState.buttonDown[event.button] = false;
                _this.runningMouseState.unusedClick[event.button] = true;
            });
            canvas.addEventListener('mousemove', function (event) {
                var target = event.currentTarget;
                var rect = target.getBoundingClientRect();
                _this.runningMouseState.position.x = event.clientX - rect.left;
                _this.runningMouseState.position.y = event.clientY - rect.top;
            });
            canvas.addEventListener('contextmenu', function (event) { return event.preventDefault(); });
            canvas.addEventListener('wheel', function (event) {
                if (event.deltaY < 0)
                    _this.runningMouseState.scroll = Scroll_2.Scroll.Up;
                else if (event.deltaY > 0)
                    _this.runningMouseState.scroll = Scroll_2.Scroll.Down;
            });
            window.addEventListener('keydown', function (event) {
                _this.runningKeyboardState.setKeyDown(event.code);
            });
            window.addEventListener('keyup', function (event) {
                _this.runningKeyboardState.setKeyUp(event.code);
            });
        }
        Input.prototype.update = function () {
            //Update mouse states
            this.previousMouseState = this.currentMouseState;
            this.currentMouseState = this.runningMouseState.clone();
            this.runningMouseState.scroll = Scroll_2.Scroll.None;
            this.runningMouseState.unusedClick = {};
            this.runningMouseState.unusedDown = {};
            //Update keyboard states
            this.previousKeyboardState = this.currentKeyboardState;
            this.currentKeyboardState = this.runningKeyboardState.clone();
            shouldDebug = this.isKeyDown(Keys_1.Keys.PauseBreak);
        };
        Input.prototype.getMousePosition = function () {
            return this.currentMouseState.position;
        };
        Input.prototype.getMouseScroll = function () {
            return this.currentMouseState.scroll;
        };
        Input.prototype.isButtonUp = function (mouseButton) {
            return this.currentMouseState.isButtonUp(mouseButton);
        };
        Input.prototype.isButtonDown = function (mouseButton) {
            return this.currentMouseState.isButtonDown(mouseButton);
        };
        Input.prototype.isButtonStartOfClick = function (mouseButton) {
            return this.currentMouseState.isButtonDown(mouseButton) && this.previousMouseState.isButtonUp(mouseButton);
        };
        Input.prototype.isButtonEndOfClick = function (mouseButton) {
            return this.currentMouseState.isButtonUp(mouseButton) && this.previousMouseState.isButtonDown(mouseButton);
        };
        Input.prototype.hasUnusedClick = function (mouseButton) {
            return this.currentMouseState.hasUnusedClick(mouseButton);
        };
        Input.prototype.setClickUsed = function (mouseButton) {
            this.currentMouseState.setClickUsed(mouseButton);
        };
        Input.prototype.hasUnusedDown = function (mouseButton) {
            return this.currentMouseState.hasUnusedDown(mouseButton);
        };
        Input.prototype.setDownUsed = function (mouseButton) {
            this.currentMouseState.setDownUsed(mouseButton);
        };
        Input.prototype.isKeyDown = function (key) {
            return this.currentKeyboardState.isKeyDown(key);
        };
        Input.prototype.isKeyUp = function (key) {
            return this.currentKeyboardState.isKeyUp(key);
        };
        return Input;
    }());
    exports.Input = Input;
});
define("Boilerplate/Classes/GameBase", ["require", "exports", "Boilerplate/Classes/Content", "Boilerplate/Classes/Input"], function (require, exports, Content_1, Input_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GameBase = void 0;
    var GameBase = /** @class */ (function () {
        function GameBase(enumType) {
            var _this = this;
            this.content = new Content_1.Content();
            this.content.loadTextures(enumType);
            this.canvas = document.getElementById('gameCanvas');
            this.context = this.canvas.getContext2D();
            this.context.imageSmoothingEnabled = false;
            this.input = new Input_1.Input(this.canvas);
            this.updateWindowSize();
            window.addEventListener('resize', function () { return _this.updateWindowSize(); });
        }
        GameBase.prototype.run = function () {
            this.initialize();
            this.startUpdating();
            this.startDrawing();
        };
        GameBase.prototype.baseUpdate = function () {
            this.input.update();
            this.update();
        };
        GameBase.prototype.baseDraw = function () {
            var transform = this.context.getTransform();
            this.context.clearRect(-transform.e, -transform.f, this.windowWidth, this.windowHeight);
            this.draw();
        };
        GameBase.prototype.startUpdating = function () {
            var _this = this;
            setInterval(function () { return _this.baseUpdate(); }, GameBase.updateInterval);
        };
        GameBase.prototype.startDrawing = function () {
            var _this = this;
            setInterval(function () { return _this.baseDraw(); }, GameBase.drawInterval);
        };
        GameBase.prototype.updateWindowSize = function () {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
            this.windowWidth = window.innerWidth;
            this.windowHeight = window.innerHeight;
            this.context.imageSmoothingEnabled = false;
        };
        GameBase.updatesPerSecond = 60;
        GameBase.drawsPerSecond = 60;
        GameBase.updateInterval = 1000 / GameBase.updatesPerSecond;
        GameBase.drawInterval = 1000 / GameBase.drawsPerSecond;
        GameBase.updateTime = 1 / GameBase.updatesPerSecond;
        GameBase.drawTime = 1 / GameBase.drawsPerSecond;
        return GameBase;
    }());
    exports.GameBase = GameBase;
});
define("Game/Enums/TextureNames", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TextureNames = void 0;
    var TextureNames;
    (function (TextureNames) {
        TextureNames["MissingImage"] = "MissingImage";
    })(TextureNames = exports.TextureNames || (exports.TextureNames = {}));
});
define("Game/Classes/Game", ["require", "exports", "Boilerplate/Classes/GameBase", "Game/Enums/TextureNames"], function (require, exports, GameBase_1, TextureNames_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Game = void 0;
    var Game = /** @class */ (function (_super) {
        __extends(Game, _super);
        function Game() {
            return _super.call(this, TextureNames_1.TextureNames) || this;
        }
        Game.prototype.initialize = function () {
        };
        Game.prototype.update = function () {
            // this.context.resetTransform();
            // this.context.translate((this.windowWidth / 2) - this.guy.rectangle.center().x, (this.windowHeight / 2) - this.guy.rectangle.center().y);
        };
        Game.prototype.draw = function () {
        };
        return Game;
    }(GameBase_1.GameBase));
    exports.Game = Game;
});
define("Main", ["require", "exports", "Game/Classes/Game", "Boilerplate/Classes/Context2D"], function (require, exports, Game_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    new Game_1.Game().run();
});
var shouldDebug;
function debug() {
    if (shouldDebug)
        debugger;
}
define("Boilerplate/Modules/Utils", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Utils = void 0;
    var Utils;
    (function (Utils) {
        function createMultidimensionalArray(width, height, defaultValue) {
            var multiArray = [];
            for (var x = 0; x < width; x++) {
                var array = [];
                for (var y = 0; y < height; y++) {
                    array.push(defaultValue);
                }
                multiArray.push(array);
            }
            return multiArray;
        }
        Utils.createMultidimensionalArray = createMultidimensionalArray;
        function forEach2d(array2d, func) {
            for (var x = 0; x < array2d.length; x++) {
                for (var y = 0; y < array2d[x].length; y++) {
                    func(array2d[x][y], x, y);
                }
            }
        }
        Utils.forEach2d = forEach2d;
    })(Utils = exports.Utils || (exports.Utils = {}));
});
define("Game/Functions", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.numberWithPostfix = void 0;
    var exponentSymbols = [
        "K",
        "M",
        "B",
        "T",
        "Qa",
        "Qi",
        "Sx",
        "Sp",
        "Oc",
        "No",
        "Dc",
    ];
    function numberWithPostfix(num) {
        var split = num.toExponential(3).split("e");
        var exponentNumber = split[0];
        var exponent = parseInt(split[1].replace("+", ""));
        var index = Math.floor(exponent / 3);
        if (index <= 0) {
            return num.toFixed(2);
        }
        if (index > exponentSymbols.length) {
            return exponentNumber + "e" + exponent;
        }
        var numWithTrail = (num / Math.pow(10, (index) * 3)).toFixed(3).substring(0, 4);
        while (numWithTrail.endsWith('0')) {
            numWithTrail = numWithTrail.substring(0, numWithTrail.length - 1);
        }
        if (numWithTrail.endsWith('.')) {
            numWithTrail = numWithTrail.substring(0, numWithTrail.length - 1);
        }
        return numWithTrail + exponentSymbols[index - 1];
    }
    exports.numberWithPostfix = numberWithPostfix;
});
define("Game/Modules/GameColour", ["require", "exports", "Boilerplate/Classes/Colour"], function (require, exports, Colour_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GameColour = void 0;
    var GameColour;
    (function (GameColour) {
        GameColour.text = Colour_1.Colour.white;
    })(GameColour = exports.GameColour || (exports.GameColour = {}));
});
//# sourceMappingURL=Main.js.map