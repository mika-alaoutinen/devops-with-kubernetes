export interface HealthCheck {
  status: 'UP' | 'DOWN'
}

export interface Ping {
  id: number,
  timestamp: Date
}
