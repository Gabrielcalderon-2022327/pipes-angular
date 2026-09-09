import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'perimetroRectangulo', standalone: true })
export class PerimetroRectanguloPipe implements PipeTransform {
    transform(base: number, altura: number = 5): number {
        return 2 * (base + altura);
    }
}

@Pipe({ name: 'areaTriangulo', standalone: true })
export class AreaTrianguloPipe implements PipeTransform {
    transform(base: number, altura: number = 5): number {
        return (base * altura) / 2;
    }
}

@Pipe({ name: 'velocidadFinal', standalone: true })
export class VelocidadFinalPipe implements PipeTransform {
    transform(velocidadInicial: number, aceleracion: number = 9.8, tiempo: number = 2): number {
        return velocidadInicial + (aceleracion * tiempo);
    }
}

@Pipe({ name: 'leyOhm', standalone: true })
export class LeyOhmPipe implements PipeTransform {
    transform(corriente: number, resistencia: number = 10): number {
        return corriente * resistencia;
    }
}

@Pipe({ name: 'densidad', standalone: true })
export class DensidadPipe implements PipeTransform {
    transform(masa: number, volumen: number = 2): number {
        return volumen > 0 ? masa / volumen : 0;
    }
}

@Pipe({ name: 'fahrenheitACelsius', standalone: true })
export class FahrenheitACelsiusPipe implements PipeTransform {
    transform(fahrenheit: number): number {
        return (fahrenheit - 32) * (5 / 9);
    }
}

@Pipe({ name: 'imc', standalone: true })
export class ImcPipe implements PipeTransform {
    transform(pesoKg: number, alturaMetros: number = 1.75): number {
        return alturaMetros > 0 ? pesoKg / Math.pow(alturaMetros, 2) : 0;
    }
}

@Pipe({ name: 'progresionAritmetica', standalone: true })
export class ProgresionAritmeticaPipe implements PipeTransform {
    transform(a1: number, n: number = 5, diferencia: number = 2): number {
        return a1 + (n - 1) * diferencia;
    }
}

@Pipe({ name: 'sumaAngulosPoligono', standalone: true })
export class SumaAngulosPoligonoPipe implements PipeTransform {
    transform(nLados: number): number {
        return nLados >= 3 ? (nLados - 2) * 180 : 0;
    }
}

@Pipe({ name: 'kmAMillas', standalone: true })
export class KmAMillasPipe implements PipeTransform {
    transform(km: number): number {
        return km * 0.621371;
    }
}