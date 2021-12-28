import React from 'react'


function help(props) {
    return (
        <div>
            <h3>FAQ</h3>
            <h5>
                Is all the information needed when created an account?
            </h5>
            <p>
                Yes, we need all information asked for when creating an account except for your middle.
            </p>
            <h5>
                Where can I find previous transactions?
            </h5>
            <p>
                Previous transactions are shown on the account information page. They are shown 30 days at a time.
                To see older transactions please click back through the transactions.
            </p>
            <h5>
                Where can I find my credit score?
            </h5>
            <p>
                On the account information page click the button "Get Credit Score".
                Your most recent score will be at the top of the page.
                Clicking "Show Previous Scores" will display previous scores.
            </p>
            <h5>
                Where can I find my statement history?
            </h5>
            <p>
                On the account information page there is a "My Statments" button that will take you to your statements.
                There you can click for your statement pdf.
            </p>
            <h5>
                How can I contact you for help?
            </h5>
            <p>
                Visit our <a href="/contact">contact page</a> for information on how to reach us.
            </p>
            
        </div>
    )
}



export default help

