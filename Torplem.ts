const Torplem = {
    Initialize: {
        Ambient: function() {
            console.log("Ambiente Iniciado...");
        }
    },

    Soma: function(a: number, b: number): number {
        return a + b;
    },

    Subtracao: function(a: number, b: number): number {
        return a - b;
    },

    Multiplicacao: function(a: number, b: number): number {
        return a * b;
    },

    Divisao: function(a: number, b: number): number | string {
        if (b !== 0) {
            return a / b;
        } else {
            throw new Error('Erro: Divisão por zero.');
        }
    },

    ehParouImpar: function(a: number): string {
        return a % 2 === 0 ? 'Par' : 'Ímpar';
    },

    VerificarPositivoNegativoZero: function(a: number): string {
        if (a > 0) return 'Positivo'; 
        if (a < 0) return 'Negativo'; 
        return 'Zero';
    },

    Fatorial: function(n: number): number | string {
        if (n < 0) throw new Error('Fatorial não definido para números negativos.');
        if (n === 0 || n === 1) return 1;
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    },

    VerificarPrimo: function(n: number): boolean {
        if (n <= 1) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    },

    Potencia: function(base: number, expoente: number): number {
        return Math.pow(base, expoente);
    },

    RaizQuadrada: function(n: number): number | string {
        if (n < 0) throw new Error('Número negativo não tem raiz quadrada real.');
        return Math.sqrt(n);
    },

    Maximo: function(arr: number[]): number {
        return Math.max(...arr);
    },

    Minimo: function(arr: number[]): number {
        return Math.min(...arr);
    },

    Media: function(arr: number[]): number {
        const sum = arr.reduce((a, b) => a + b, 0);
        return sum / arr.length;
    },

    MDC: function(a: number, b: number): number {
        while (b !== 0) {
            const temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    },

    MMC: function(a: number, b: number): number {
        return (a * b) / this.MDC(a, b);
    },

    GrausParaRadianos: function(angulo: number): number {
        return (angulo * Math.PI) / 180;
    },

    RadianosParaGraus: function(radianos: number): number {
        return (radianos * 180) / Math.PI;
    },

    // Novo: Verifica se um número é perfeito
    VerificarNumeroPerfeito: function(n: number): boolean {
        const divisores = [];
        for (let i = 1; i < n; i++) {
            if (n % i === 0) {
                divisores.push(i);
            }
        }
        const somaDivisores = divisores.reduce((a, b) => a + b, 0);
        return somaDivisores === n;
    },

    // Novo: Converte um número de base decimal para uma base específica
    ConverterBase: function(num: number, base: number): string {
        return num.toString(base);
    },

    // Novo: Gera um número aleatório entre um intervalo
    GerarNumeroAleatorio: function(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    // Novo: Calcula a mediana de um array de números
    CalcularMediana: function(arr: number[]): number {
        const sorted = arr.slice().sort((a, b) => a - b);
        const mid = Math.floor(sorted.length / 2);
        return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
    },

    // Novo: Calcula a variância de um array de números
    CalcularVariancia: function(arr: number[]): number {
        const media = this.Media(arr);
        return arr.reduce((acc, val) => acc + Math.pow(val - media, 2), 0) / arr.length;
    },

    // Novo: Calcula o desvio padrão de um array de números
    CalcularDesvioPadrao: function(arr: number[]): number {
        return Math.sqrt(this.CalcularVariancia(arr));
    },

    // Novo: Soma todos os números em um array
    SomaArray: function(arr: number[]): number {
        return arr.reduce((acc, val) => acc + val, 0);
    },

    // Novo: Gera os primeiros n números de Fibonacci
    Fibonacci: function(n: number): number[] {
        const fib = [0, 1];
        for (let i = 2; i < n; i++) {
            fib[i] = fib[i - 1] + fib[i - 2];
        }
        return fib.slice(0, n);
    }
};

export default Torplem; // Atualizando para exportar como módulo ES
