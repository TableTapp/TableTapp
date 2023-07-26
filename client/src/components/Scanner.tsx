/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

interface ScannerProps {
    result: (result: string) => void;
}

const Scanner: React.FC<ScannerProps> = (props: ScannerProps) => {   
    useEffect(() => {
        const scanner = new Html5QrcodeScanner('reader', {
            qrbox: {
                width: 300,
                height: 300
            },
            fps: 5
        }, false);
    
        scanner.render(success, error);
    
        function success(result: any) {
            scanner.clear();
            props.result(result);
        }
    
        function error(err: any) {
            console.log(err)
        }
    }, []);

   
    return (
        <>
            <div id="reader"></div>
        </>
    );
};

export default Scanner;