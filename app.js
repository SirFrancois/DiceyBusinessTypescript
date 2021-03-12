window.onload = function () {
    var button = document.getElementById('roll');
    if (button) {
        button.addEventListener('click', function (event) {
            var Die = /** @class */ (function () {
                function Die() {
                    this.value;
                }
                Die.prototype.roll = function () {
                    this.value = Math.floor(Math.random() * 7);
                    console.log(this.value);
                    var value1 = document.createTextNode(this.value);
                    var div = document.createElement("div");
                    div.appendChild(value1);
                    document.body.appendChild(div);
                    return this.value;
                };
                return Die;
            }());
            var die = new Die();
            die.roll();
        });
    }
};
