import React from "react";

const letters = { id: 1, title: 'Matrix', description: 'Movie', price: 0 }

class Produits extends React.Component {

    render() {

        if (letters.length === 0) {
            return (
                <div>
                    <h1>Il y a rien ici</h1>
                </div>)
        }
        else {
            return (
                <table>
                    <thead>
                        <tr>
                            <th>Contenu d'en-tête 1</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Contenu interne 1</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>Pied de tableau 1</td>
                        </tr>
                    </tfoot>
                </table>
            )
        }

    }

}

export default Produits