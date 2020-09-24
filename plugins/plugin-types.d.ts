import Vue from 'vue'
import OmnixentClient from '../client/client'

declare module 'vue/types/vue' {
  interface Vue {
    $omnixentClient: OmnixentClient
  }
}
