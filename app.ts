window.onload = function () {
    var button = <HTMLButtonElement> document.getElementById('roll')

    if (button) {
        button.addEventListener('click', function (event) {

            class Die {
                value: any
                div: HTMLDivElement
                
                constructor() {
                    this.value;
                }

                roll() {
                    this.value = Math.floor(Math.random() * 7);
                    console.log(this.value);

                    var value1 =  document.createTextNode(this.value);
                    var div = document.createElement("div");
                    div.appendChild(value1);
                    document.body.appendChild(div);
                    return this.value;

                }
            }
            var die = new Die();
            die.roll();
        })
    }
}
