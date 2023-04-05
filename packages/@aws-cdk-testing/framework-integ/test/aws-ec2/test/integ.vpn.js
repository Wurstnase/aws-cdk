"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cdk = require("aws-cdk-lib");
const ec2 = require("aws-cdk-lib/aws-ec2");
const app = new cdk.App();
const stack = new cdk.Stack(app, 'aws-cdk-ec2-vpn');
const vpc = new ec2.Vpc(stack, 'MyVpc', {
    cidr: '10.10.0.0/16',
    vpnConnections: {
        Dynamic: {
            ip: '52.85.255.164',
            tunnelOptions: [
                {
                    preSharedKey: 'secretkey1234',
                },
            ],
        },
    },
});
vpc.addVpnConnection('Static', {
    ip: '52.85.255.197',
    staticRoutes: [
        '192.168.10.0/24',
        '192.168.20.0/24',
    ],
});
app.synth();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZWcudnBuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW50ZWcudnBuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQW1DO0FBQ25DLDJDQUEyQztBQUUzQyxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUMxQixNQUFNLEtBQUssR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLGlCQUFpQixDQUFDLENBQUM7QUFFcEQsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUU7SUFDdEMsSUFBSSxFQUFFLGNBQWM7SUFDcEIsY0FBYyxFQUFFO1FBQ2QsT0FBTyxFQUFFO1lBQ1AsRUFBRSxFQUFFLGVBQWU7WUFDbkIsYUFBYSxFQUFFO2dCQUNiO29CQUNFLFlBQVksRUFBRSxlQUFlO2lCQUM5QjthQUNGO1NBQ0Y7S0FDRjtDQUNGLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUU7SUFDN0IsRUFBRSxFQUFFLGVBQWU7SUFDbkIsWUFBWSxFQUFFO1FBQ1osaUJBQWlCO1FBQ2pCLGlCQUFpQjtLQUNsQjtDQUNGLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNkayBmcm9tICdhd3MtY2RrLWxpYic7XG5pbXBvcnQgKiBhcyBlYzIgZnJvbSAnYXdzLWNkay1saWIvYXdzLWVjMic7XG5cbmNvbnN0IGFwcCA9IG5ldyBjZGsuQXBwKCk7XG5jb25zdCBzdGFjayA9IG5ldyBjZGsuU3RhY2soYXBwLCAnYXdzLWNkay1lYzItdnBuJyk7XG5cbmNvbnN0IHZwYyA9IG5ldyBlYzIuVnBjKHN0YWNrLCAnTXlWcGMnLCB7XG4gIGNpZHI6ICcxMC4xMC4wLjAvMTYnLFxuICB2cG5Db25uZWN0aW9uczoge1xuICAgIER5bmFtaWM6IHsgLy8gRHluYW1pYyByb3V0aW5nXG4gICAgICBpcDogJzUyLjg1LjI1NS4xNjQnLFxuICAgICAgdHVubmVsT3B0aW9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJlU2hhcmVkS2V5OiAnc2VjcmV0a2V5MTIzNCcsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIH0sXG59KTtcblxudnBjLmFkZFZwbkNvbm5lY3Rpb24oJ1N0YXRpYycsIHsgLy8gU3RhdGljIHJvdXRpbmdcbiAgaXA6ICc1Mi44NS4yNTUuMTk3JyxcbiAgc3RhdGljUm91dGVzOiBbXG4gICAgJzE5Mi4xNjguMTAuMC8yNCcsXG4gICAgJzE5Mi4xNjguMjAuMC8yNCcsXG4gIF0sXG59KTtcblxuYXBwLnN5bnRoKCk7XG4iXX0=