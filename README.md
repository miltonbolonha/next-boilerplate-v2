This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

1. **Peso Relativo de Cada Meta**
   Calcule os pesos relativos para normalizar a importância de cada meta.
   Cada meta tem uma pontuação planejada (\( p_i \)), um resultado obtido (\( r_i \)), e uma meta planejada (\( m_i \)).

O peso relativo de uma meta \( i \) é dado por:

\[
w*i = \frac{p_i}{\sum*{i=1}^{n} p_i}
\]

Onde:

- \( p_i \) é a pontuação planejada da meta \( i \).
- \( n \) é o número total de metas.
- \( \sum\_{i=1}^{n} p_i \) é a soma total de todas as pontuações planejadas.

2. **Desempenho Ajustado de Cada Meta**
   Ajuste o desempenho de cada meta multiplicando pelo peso relativo.
   O desempenho ajustado de uma meta \( i \), considerando o quanto dela foi realizada (\( r_i \)) em relação à meta planejada (\( m_i \)), é dado por:

\[
x_i = w_i \times \left(\frac{r_i}{m_i}\right) \times 100
\]

Onde:

- \( w_i \) é o peso relativo da meta \( i \) (definido na fórmula anterior).
- \( \frac{r_i}{m_i} \) é a proporção da meta realizada.
- \( x_i \) é o desempenho ponderado da meta \( i \).

3. **Desempenho Total**
   Some os desempenhos ajustados para obter o desempenho total.
   \[
   D*{total} = \sum*{i=1}^{n} x_i
   \]

Esse valor representa o desempenho total ponderado, levando em consideração o peso relativo de cada meta.

4. **Média Ponderada**
   Calcule a média ponderada para encontrar o valor médio considerando os pesos.
   Para calcular a média ponderada dos desempenhos, usamos as realizações (\( r_i \)) ponderadas pelos pesos relativos \( w_i \):

\[
\mu = \sum\_{i=1}^{n} r_i \times w_i
\]

Onde:

- \( r_i \) é o resultado obtido para a meta \( i \).
- \( w_i \) é o peso relativo da meta \( i \).

5. **Variância**
   Determine a variância e o desvio padrão para entender a dispersão dos dados.
   A variância (\( \sigma^2 \)) é uma medida da dispersão dos desempenhos em relação à média ponderada:

\[
\sigma^2 = \sum\_{i=1}^{n} w_i \times (r_i^2) - \mu^2
\]

Onde:

- \( r_i \) são os resultados das metas.
- \( w_i \) são os pesos relativos.
- \( \mu \) é a média ponderada calculada anteriormente.

6. **Desvio Padrão**
   O desvio padrão (\( \sigma \)) é a raiz quadrada da variância:

\[
\sigma = \sqrt{\sigma^2}
\]

7. **Erro Padrão**
   Calcule o erro padrão para avaliar a precisão da média.
   O erro padrão (\( SE \)) mede a precisão da média calculada, baseado no desvio padrão e no número de metas (\( n \)):

\[
SE = \frac{\sigma}{\sqrt{n}}
\]

8. **Intervalo de Confiança**
   Estabeleça o intervalo de confiança para inferir sobre a média da população.
   O intervalo de confiança fornece uma faixa de valores onde a média verdadeira pode se situar com uma certa confiança. Se usamos um nível de confiança de 90% (aproximadamente 1.64), o intervalo de confiança será:

\[
IC = \mu \pm 1.64 \times SE
\]

Onde:

- \( \mu \) é a média ponderada.
- \( SE \) é o erro padrão.

Resumo do Processo:

Em resumo, o código realiza uma série de cálculos para avaliar o desempenho ponderado de metas, usando pesos relativos para cada meta. Ele também faz uma análise estatística dos resultados, calculando a média ponderada, variância, desvio padrão, erro padrão, e o intervalo de confiança para as metas.
