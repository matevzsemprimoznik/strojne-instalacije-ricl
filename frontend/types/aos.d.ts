declare module 'aos' {
    interface AosOptions {
        // Define the options here based on your needs
        duration?: number;
        easing?: string;
        delay?: number;
    }

    class AOS {
        static init(options?: AosOptions): void;
    }

    export default AOS;
}
