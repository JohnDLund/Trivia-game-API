export default class Trivia {
    constructor(data) {
        this.question = data.question
        this.answer = data.answer
        this.category = data.category
    }

    get Template() {
        return/*html*/`    
        <div class="col-12">
                <div class="card text-center">
                    <div class="card-header">
                        <p><b><u>CATEGORY</u></b></p>
                        ${this.category.title}
                    </div>
                    <div class="card-body">
                    <p><b><u>ANSWER</u></b></p>
                        <h3 class="card-title">${this.question}</h3>
                        <button onclick="app.triviaController.revealAnswer()" class="btn btn-primary">Reveal Question</button>
                        
                    </div>
                    <div class="card-footer text-muted">
                    </div>
                </div>
            </div>
            `
    }

    get Template2() {
        return/*html*/`    
        <div class="col-12">
                <div class="card text-center">
                    <div class="card-header">
                        <p><b><u>CATEGORY</u></b></p>
                        ${this.category.title}
                    </div>
                    <div class="card-body">
                    <p><b><u>ANSWER</u></b></p>
                        <h3 class="card-title">${this.question}</h3>
                        <button onclick="app.triviaController.getTrivia()" class="btn btn-primary">New Answer</button>
                        <h1>${this.answer}</h1>
                        
                    </div>
                    <div class="card-footer text-muted">
                    </div>
                </div>
            </div>
            `
    }

}