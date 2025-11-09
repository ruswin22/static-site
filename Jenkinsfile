pipeline {
    agent any

    stages {

        stage('Checkout Code') {
            steps {
                git 'https://github.com/ruswin22/static-site.git'
            }
        }

        stage('Install Node & Dependencies') {
            steps {
                sh 'curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -'
                sh 'sudo apt-get install -y nodejs'
                sh 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy to AWS EC2') {
            steps {
                sshagent(['EC2-SSH-KEY']) {
                    sh """
                        rm -rf /tmp/build
                        cp -r build /tmp/build

                        scp -o StrictHostKeyChecking=no -r /tmp/build/* ubuntu@3.110.124.86:/var/www/react-site/

                        ssh -o StrictHostKeyChecking=no ubuntu@<EC2-PUBLIC-IP> "sudo systemctl restart nginx"
                    """
                }
            }
        }
    }
}
