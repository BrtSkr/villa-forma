import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import {VitePWA} from 'vite-plugin-pwa';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    VitePWA({
      strategies: 'generateSW',
      registerType: 'autoUpdate',
      includeAssets: ['./src/assets/font/ReadexPro-Regular.ttf', './src/assets/img/logo.png'],
      manifest: {
        name: 'Villa Forma',
        short_name: 'Vforma',
        start_url: '/',
        display: 'standalone',
        theme_color: '#000000',
        background_color: '#000000',
        icons: [{
          src: './pwa/apple-icon-180.png',
          sizes: '180x180'
        },
        {
          src: './pwa/manifest-icon-192.maskable.png',
          sizes: '192x192',
        },
        {
          src: './pwa/manifest-icon-512.maskable.png',
          sizes: '512x512'
        },
        {
          src: './pwa/manifest-icon-192.maskable.png',
          sizes: '192x192'
        },
        {
          src: './pwa/manifest-icon-512.maskable.png',
          sizes: '512x512'
        },
        ]
        
      }
      }
    )
  ],
})
