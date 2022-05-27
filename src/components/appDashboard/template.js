export default ({ state, props }) => /* html */ `
    <div class="ctx-grid">
        <div class="ctx-grid-content">
            <div class="ctx-column-1">
                <div class="ctx-container">
                    <app-card 
                        data-event-emit="change-balance"
                    >
                        <div slot-id="title">
                            Saldo da conta
                        </div>
                        <div slot-id="content">
                            <app-account-balance
                                data-event-listen="change-balance"
                            >
                                <p><span>R$</span> 1.182,00</p>
                            </app-account-balance>
                        </div>
                    </app-card>            
                </div>        
                <div class="ctx-container">
                    <app-card 
                        data-event-emit="change-resume-card"
                    >
                        <div slot-id="title">
                            Cartão
                        </div>
                        <div slot-id="content">
                            <app-list
                                data-event-listen="change-resume-card"
                                data-title="Titular:Rodrigo Rocha" 
                                data-bank="Número:5654 4589 5454 1236 1238" 
                                data-agency="Validade:10/26" 
                                data-account="CVC:879" 
                            ></app-list>
                        </div>
                    </app-card>            
                </div>
                <div class="ctx-container">
                    <app-card 
                        data-event-emit="change-account"
                    >
                        <div slot-id="title">
                            Dados da conta
                        </div>
                        <div slot-id="content">
                            <app-list
                                data-event-listen="change-account"
                                data-title="Titular:Rodrigo Rocha" 
                                data-bank="Banco:3003" 
                                data-agency="Agência:0001" 
                                data-account="Conta:365895-9" 
                            ></app-list>
                        </div>
                    </app-card>            
                </div>
            </div>
            <div class="ctx-column-2">

                <div class="ctx-container">
                    <app-card data-event-emit="change-financy">
                        <div slot-id="title">
                            Histórico de transações
                        </div>
                        <div slot-id="content">
                            <app-list data-event-listen="change-financy">
                                <div slot-id="custom">
                                    <table>
                                        <thead>
                                            <th>Tipo</th>
                                            <th>Data</th>
                                            <th>Valor</th>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Entrada</td>
                                                <td>10/05/2022</td>
                                                <td>R$ 182,75</td>
                                            </tr>
                                            <tr>
                                                <td>Entrada</td>
                                                <td>10/05/2022</td>
                                                <td>R$ 182,75</td>
                                            </tr>
                                            <tr>
                                                <td>Entrada</td>
                                                <td>10/05/2022</td>
                                                <td>R$ 182,75</td>
                                            </tr>
                                            <tr>
                                                <td>Entrada</td>
                                                <td>10/05/2022</td>
                                                <td>R$ 182,75</td>
                                            </tr>
                                            <tr>
                                                <td>Entrada</td>
                                                <td>10/05/2022</td>
                                                <td>R$ 182,75</td>
                                            </tr>
                                            <tr>
                                                <td>Entrada</td>
                                                <td>10/05/2022</td>
                                                <td>R$ 182,75</td>
                                            </tr>
                                            <tr>
                                                <td>Entrada</td>
                                                <td>10/05/2022</td>
                                                <td>R$ 182,75</td>
                                            </tr>
                                            <tr>
                                                <td>Entrada</td>
                                                <td>10/05/2022</td>
                                                <td>R$ 182,75</td>
                                            </tr>
                                            <tr>
                                                <td>Entrada</td>
                                                <td>10/05/2022</td>
                                                <td>R$ 182,75</td>
                                            </tr>
                                            <tr>
                                                <td>Entrada</td>
                                                <td>10/05/2022</td>
                                                <td>R$ 182,75</td>
                                            </tr>
                                            <tr>
                                                <td>Entrada</td>
                                                <td>10/05/2022</td>
                                                <td>R$ 182,75</td>
                                            </tr>
                                            <tr>
                                                <td>Entrada</td>
                                                <td>10/05/2022</td>
                                                <td>R$ 182,75</td>
                                            </tr>
                                            <tr>
                                                <td>Entrada</td>
                                                <td>10/05/2022</td>
                                                <td>R$ 182,75</td>
                                            </tr>
                                            <tr>
                                                <td>Entrada</td>
                                                <td>10/05/2022</td>
                                                <td>R$ 182,75</td>
                                            </tr>
                                            <tr>
                                                <td>Entrada</td>
                                                <td>10/05/2022</td>
                                                <td>R$ 182,75</td>
                                            </tr>
                                            <tr>
                                                <td>Entrada</td>
                                                <td>10/05/2022</td>
                                                <td>R$ 182,75</td>
                                            </tr>
                                            <tr>
                                                <td>Entrada</td>
                                                <td>10/05/2022</td>
                                                <td>R$ 182,75</td>
                                            </tr>
                                            <tr>
                                                <td>Entrada</td>
                                                <td>10/05/2022</td>
                                                <td>R$ 182,75</td>
                                            </tr>
                                                <tr>
                                                    <td>Entrada</td>
                                                    <td>10/05/2022</td>
                                                    <td>R$ 182,75</td>
                                                </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </app-list>
                        </div>
                    </app-card>            
                </div>
            </div>        
        </div>
    </div>
`
