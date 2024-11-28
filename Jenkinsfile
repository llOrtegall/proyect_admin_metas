pipeline {
  agent any
    
  tools { nodejs 'node-v22' }

  environment { 
    ENV_METAS_ADM_CLIENT = credentials('ENV_METAS_ADM_CLIENT')
    ENV_METAS_ADM_API = credentials('ENV_METAS_ADM_API')
  }
    
  stages {
    stage('Copy .env files') {
      steps {
        script {
            def env_client = readFile(ENV_METAS_ADM_CLIENT)
            def env_api = readFile(ENV_METAS_ADM_API)
            writeFile file: './client/.env', text: env_client
            writeFile file: './api/.env', text: env_api
          }
        }
      }

      stage('install dependencies frontend') {
        steps {
          script {
            sh 'cd client && npm install'
            sh 'cd client && node --run build'
          }
        }
      }

      stage('down docker compose'){
        steps {
          script { sh 'docker compose down' }
        }
      }

      stage('delete images if exist') {
        steps{
          script {
            def images = 'api_adm_metas:v.1.0'
            if (sh(script: "docker images -q ${images}", returnStdout: true).trim()) {
              sh "docker rmi ${images}"
            } else {
              echo "Image ${images} does not exist."
              echo "continuing..."
            }
          }
        }
      }

      stage('run docker compose'){
        steps {
          script { sh 'docker compose up -d' }
          }
      }
    }
}