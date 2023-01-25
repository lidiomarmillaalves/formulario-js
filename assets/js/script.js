

class Form {
    items = [];
    method = 'GET';
    constructor(container, method, action) {
        this.container = document.querySelector(container);
        this.method = method;
        this.action = action;
    }

    addItem(item) {
        this.items.push(item);
    }

    render() {
        let formElement = document.createElement('form');
        formElement.setAttribute('method', this.method);
        formElement.setAttribute('action', this.action);

        for (let i in this.items) {
            this.items[i].render(formElement);
        }

        this.container.appendChild(formElement);
    }
}



class Input {


    _type = 'text';
    required = false;

    constructor(name, label){
        this.name = name;
        this.label = label;

    }

    get type() {
        return this._type;
    }

    set type(t) {
        if(['text', 'password', 'email', 'submit'].includes(t)){ 
            this._type = t;
        } else {
            throw new Error('input "${t}" type dosent exist.')
        }     
    }

    render(formElement) {
        let el = document.createElemente('input');
        el.type = this.type;
        el.name = this.name;
        el.placeholder = this.label;
        el.required = this.required;
        formElement.appendChild(el);
    }
}

//Botão vai erdar do input
class Button extends Input {
    constructor(label) {
        super('', label);
        this.type = 'submit';
    }

    render(formElement) {
        let el = document.createElement('input');
        el.type = this.type;
        el.value = this.label;
        formElement.appendChild(el);
    }
}

//Implementação

//Formulário
let form = new Input('.formArea', 'POST', 'https://site.com.br')

//Email
let email = new Input("email", 'Digite seu e-email');
email.type = 'email';
email.required = true;
form.addItem(email);


//Senha
let password = new Input('password', 'Digite sua senhsa');
password.type = 'password';
form.addItem(password);

//Botão
let button = new Button('Enviar');
form.addItem(button);

form.render();

console.log(form.items.length);